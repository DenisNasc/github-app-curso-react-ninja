import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {Search} from 'semantic-ui-react';
import {CacheSchema} from '../redux/reducers/cache/types';
import {StoreSchema} from '../redux/store/types';

interface SearchBar {
  callback: (value: string) => void;
  query: string;
}

const SearchBar = ({callback, query}: SearchBar) => {
  const {users} = useSelector<StoreSchema, CacheSchema>(state => state.cache);

  const cachedUsers = users.map(e => ({
    title: e.nickname,
    description: e.description || 'No description',
    image: e.avatarURL,
    query: e.nickname
  }));

  const [resultsOfQuery, setResultsOfQuery] = useState(cachedUsers);

  const handleSearchChange = (value: string) => {
    callback(value);

    const regexNickname = new RegExp(value, 'i');
    setResultsOfQuery(cachedUsers.filter(e => regexNickname.test(e.title)));
  };

  return (
    <SearchBarContainer>
      <Search
        id="search"
        value={query}
        onSearchChange={(e, {value}) => handleSearchChange(value || '')}
        onResultSelect={(e, {result}) => callback(result.query || '')}
        results={resultsOfQuery}
        placeholder="Search for cached users"
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: purple;

  .search {
    margin-right: 100px;
  }
`;

export default SearchBar;
