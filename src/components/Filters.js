import React, { useEffect, useState } from 'react';
import { Checkbox, Col, Row, Spin } from 'antd';

import { API } from '../API';
import { showErrorNotification } from '../utils/notification';
import { capitalize } from '../utils/string';

const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFilters = async () => {
    try {
      const promises = [API.getShapes(), API.getColors(), API.getSizes()];
      const [shape, color, size] = await Promise.all(promises);
      setFilters({ shape, color, size });
    } catch (err) {
      const message = err.message || 'Failed to fetch filters!';
      showErrorNotification(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilters();
  }, []);

  return (
    <Spin tip='Loading...' spinning={loading} size='large'>
      {filters ? (
        <Row className='flex justify-center ml-8'>
          {Object.entries(filters).map(([key, value]) => (
            <Col span={24} key={key}>
              <h1 className='text-xl my-4 mt-8'>{capitalize(key)}</h1>
              <Checkbox.Group onChange={(value) => onFilter(key, value)}>
                <Row>
                  {Object.entries(value).map(([key, value]) => (
                    <Col span={24} key={key}>
                      <Checkbox value={value.id}>{value.name}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Col>
          ))}
        </Row>
      ) : (
        <div className='h-60'></div>
      )}
    </Spin>
  );
};

export default Filters;
