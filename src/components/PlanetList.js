import React, { useEffect, useState } from 'react';
import { List, Spin } from 'antd';

import PlanetItem from './PlanetItem';

const PlanetList = ({ planets }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!planets);
  }, [planets]);

  return (
    <Spin tip='Loading...' spinning={loading} size='large'>
      {planets ? (
        <List itemLayout='horizontal' dataSource={planets} renderItem={PlanetItem} />
      ) : (
        <div className='h-60'></div>
      )}
    </Spin>
  );
};

export default PlanetList;
