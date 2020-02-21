import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {Image, Search} from 'semantic-ui-react';
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
      <div id="title">
        <Image
          src="/home/denis/Documentos/developer/github-app/src/assets/github.png"
          alt="Github logo"
        />
        <h1>Github Aplication</h1>
      </div>
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
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: hsl(180, 75%, 20%);

  #title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 246px;
    width: 413px;
    h1 {
      margin: 0;
      font-size: 36px;
      font-weight: bold;
    }
  }

  .search {
    margin-right: 246px;
  }
`;

export default SearchBar;
