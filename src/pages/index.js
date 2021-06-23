import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';

import { API } from '../API';
import Filters from '../components/Filters';
import PlanetList from '../components/PlanetList';
import SearchBar from '../components/SearchBar';
import { showErrorNotification } from '../utils/notification';

const HomePage = () => {
  const [searchText, setSearchText] = useState(null);
  const [planetList, setPlanetList] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState({});

  const getPlanets = async () => {
    try {
      const params = { q: searchText, ...appliedFilters };
      const planets = await API.getPlanets(params);
      setPlanetList(planets);
    } catch (err) {
      const message = err.message || 'Failed to fetch planets!';
      showErrorNotification(message);
    }
  };

  const onSearch = () => {
    setPlanetList(null);
    getPlanets();
  };

  const onFilterChange = (key, value) => {
    setAppliedFilters((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const onSearchTextChange = (event) => setSearchText(event.target.value);

  useEffect(() => {
    getPlanets();
  }, [appliedFilters]);

  return (
    <div className='h-full xl:mx-64 lg:mx-52 md:mx-24 sm:mx-0'>
      <Row className='pt-8 flex justify-center items-center'>
        <h3>PRIMEDIGITAL</h3>
      </Row>

      <Row className='mb-10 flex justify-center items-center search-bar'>
        <SearchBar
          onSearch={onSearch}
          onChange={onSearchTextChange}
          style={{ width: '500px', margin: '0px 10px' }}
        />
      </Row>

      <hr />

      <Row className='h-full flex justify-center border-l border-r border-solid border-gray-200 border-t-0 border-b-0'>
        <Col span={8} className='px-2'>
          <Filters onFilter={onFilterChange} />
        </Col>
        <Col span={16} className='pt-4 border-l border-solid border-gray-200 pl-4'>
          <PlanetList planets={planetList} />
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(HomePage);
