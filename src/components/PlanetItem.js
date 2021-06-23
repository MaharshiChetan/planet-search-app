import React from 'react';
import { Avatar, List } from 'antd';

const PlanetItem = ({ name }) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={
          <Avatar src='https://media4.s-nbcnews.com/i/newscms/2018_37/2566876/180914-pluto-al-1426_a76ce2023bcc38bca7d3a04ed069e415.jpg' />
        }
        title={
          <a href={`https://www.google.com/search?q=${name}`} target='_blank' rel='noreferrer'>
            {name}
          </a>
        }
        description='Planets in Our Solar System · Mercury · Venus · Earth · Mars · Jupiter · Saturn · Uranus · Neptune.'
      />
    </List.Item>
  );
};

export default PlanetItem;
