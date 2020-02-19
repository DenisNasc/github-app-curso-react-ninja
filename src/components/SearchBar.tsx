import React, {useState} from 'react';
import styled from 'styled-components';
import {Search} from 'semantic-ui-react';

interface SearchBar {
  callback: (value: string) => void;
  query: string;
}

const SearchBar = ({callback, query}: SearchBar) => {
  return (
    <SearchBarContainer>
      <Search value={query} onSearchChange={(e, {value}) => callback(value || '')} />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
`;

export default SearchBar;
