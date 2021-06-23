import React from 'react';
import { List, Spin } from 'antd';

import PlanetItem from './PlanetItem';

const PlanetList = ({ loading, planets }) => {
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
