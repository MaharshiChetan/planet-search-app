import React from 'react';

import { Input } from 'antd';

const SearchBar = ({ onSearch, ...rest }) => {
  return (
    <Input.Search
      allowClear
      enterButton
      onSearch={onSearch}
      placeholder='Search planet'
      size='large'
      style={{ width: '500px' }}
      {...rest}
    />
  );
};

export default SearchBar;
