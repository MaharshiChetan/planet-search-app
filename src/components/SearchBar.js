import React, { useEffect, useRef } from 'react';

import { Input } from 'antd';
import { addEventListeners, removeEventListeners } from '../utils/keypressEventListener';

const SearchBar = ({ onSearch, ...rest }) => {
  const searchRef = useRef();

  const handleKeyUp = (event) => {
    const isSearchFocused = searchRef.current.state.focused;
    if (event.key === 'Escape') return searchRef.current.blur();
    if (isSearchFocused) return;

    if (event.key === '/') searchRef.current.focus();
  };

  useEffect(() => {
    addEventListeners(handleKeyUp);
    return () => removeEventListeners(handleKeyUp);
  }, []);

  return (
    <>
      <Input.Search
        enterButton
        onSearch={onSearch}
        placeholder='Search planet (Hint: press /)'
        size='large'
        ref={searchRef}
        {...rest}
      />
    </>
  );
};

export default SearchBar;
