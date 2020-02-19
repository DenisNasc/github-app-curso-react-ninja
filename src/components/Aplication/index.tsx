import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {Button} from 'semantic-ui-react';

import SearchBar from '../SearchBar';
import GithubUser from '../GithubUser';

import {UserSchema} from '../../redux/reducers/user/types';
import {StoreSchema} from '../../redux/store/types';
import useGithubUser from './hooks/useGithubUser';
import {FETCH_USER_START} from '../../redux/actions/aplication';
import {AplicationSchema} from '../../redux/reducers/aplication/types';

const Aplication = () => {
  const dispatch = useDispatch();
  const githubUser = useSelector<StoreSchema, UserSchema>(state => state.user);
  const {fetchUserSuccess} = useSelector<StoreSchema, AplicationSchema>(state => state.aplication);

  const [query, setQuery] = useState('');
  const [timeout, handleTimeout] = useState<number | undefined>(undefined);

  const handleQuery = (value: string) => {
    setQuery(() => value);

    clearTimeout(timeout);

    const timer = setTimeout(() => {
      dispatch({type: FETCH_USER_START});
    }, 500);

    handleTimeout(timer);
  };

  useGithubUser(query);

  return (
    <>
      <SearchBar query={query} callback={handleQuery} />
      <AppContainer>
        {fetchUserSuccess ? (
          <>
            <GithubUser
              nickname={githubUser.nickname}
              name={githubUser.name}
              avatarURL={githubUser.avatarURL}
              description={githubUser.description}
              createdAt={githubUser.createdAt}
              repos={githubUser.repos}
            />

            <div>
              <Button content="Ver repositórios" />
              <Button content="Ver favoritos" />
            </div>
          </>
        ) : (
          <div />
        )}
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Aplication;
