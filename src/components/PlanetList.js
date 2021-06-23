import React, { useEffect, useState } from 'react';
import { Avatar, List, Spin } from 'antd';

const PlanetList = ({ planets }) => {
  const [loading, setLoading] = useState(true);

  const renderListItem = (item) => (
    <List.Item>
      <List.Item.Meta
        avatar={
          <Avatar src='https://media4.s-nbcnews.com/i/newscms/2018_37/2566876/180914-pluto-al-1426_a76ce2023bcc38bca7d3a04ed069e415.jpg' />
        }
        title={
          <a href={`https://www.google.com/search?q=${item.name}`} target='_blank' rel='noreferrer'>
            {item.name}
          </a>
        }
        description='Planets in Our Solar System · Mercury · Venus · Earth · Mars · Jupiter · Saturn · Uranus · Neptune.'
      />
    </List.Item>
  );

  useEffect(() => {
    setLoading(!planets);
  }, [planets]);

  return (
    <Spin tip='Loading...' spinning={loading} size='large'>
      {planets ? (
        <List itemLayout='horizontal' dataSource={planets} renderItem={renderListItem} />
      ) : (
        <div className='h-60'></div>
      )}
    </Spin>
  );
};

export default PlanetList;
