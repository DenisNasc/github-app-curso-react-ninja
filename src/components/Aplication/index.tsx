import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {Button} from 'semantic-ui-react';

import SearchBar from '../SearchBar';
import GithubUser from '../GithubUser';
import UserRepositories from '../UserRepositories';

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
    }, 1000);

    handleTimeout(timer);
  };

  useGithubUser(query);

  return (
    <>
      <SearchBar query={query} callback={handleQuery} />
      <AppContainer>
        {fetchUserSuccess ? (
          <>
            <UserRepositories repositories={githubUser.repositories} />

            <GithubUser
              nickname={githubUser.nickname}
              email={githubUser.email}
              name={githubUser.name}
              avatarURL={githubUser.avatarURL}
              description={githubUser.description}
              createdAt={githubUser.createdAt}
              repos={githubUser.repos}
              followers={githubUser.followers}
              following={githubUser.following}
            />
          </>
        ) : (
          <div />
        )}
      </AppContainer>
    </>
  );
};

const AppContainer = styled.main`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: grey;
`;

export default Aplication;
