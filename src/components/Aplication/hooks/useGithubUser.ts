import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import axios from '../../../axios';

import {AplicationSchema} from '../../../redux/reducers/aplication/types';
import {StoreSchema} from '../../../redux/store/types';

import SET_USER from '../../../redux/actions/user';
import {FETCH_USER_SUCCESS, FETCH_USER_FAIL} from '../../../redux/actions/aplication';
import {CACHE_THIS_USER} from '../../../redux/actions/cache';
import {CacheSchema} from '../../../redux/reducers/cache/types';

const useGithubUser = (query: string) => {
  const dispatch = useDispatch();
  const {fetchUserStart} = useSelector<StoreSchema, AplicationSchema>(state => state.aplication);
  const {users} = useSelector<StoreSchema, CacheSchema>(state => state.cache);

  useEffect(() => {
    if (fetchUserStart) {
      const fetchGithubUser = async () => {
        const alreadyCached = users.find(
          user => user.nickname.toLowerCase() === query.toLowerCase()
        );

        try {
          const response = await axios.get(`users/${query}`, {
            headers: {'If-None-Match': alreadyCached?.etag}
          });
          console.log(response);

          if (response.data && !alreadyCached) {
            const {
              id,
              email,
              login: nickname,
              name,
              avatar_url: avatarURL,
              bio: description,
              created_at: createdAt,
              public_repos: repos,
              following,
              followers
            } = response.data;

            const user = {
              id,
              email,
              nickname,
              name,
              avatarURL,
              description,
              createdAt,
              following,
              followers,
              repos
            };

            const {etag} = response.headers;

            dispatch({type: SET_USER, payload: {...user}});
            dispatch({type: CACHE_THIS_USER, payload: {...user, etag, query}});
            dispatch({type: FETCH_USER_SUCCESS});
          }
        } catch (err) {
          if (err.response && err.response.status === 304) {
            dispatch({type: SET_USER, payload: {...alreadyCached}});
            dispatch({type: FETCH_USER_SUCCESS});
            return;
          }
          console.log(err);
          dispatch({type: FETCH_USER_FAIL});
        }
      };

      fetchGithubUser();
    }
  }, [fetchUserStart]);
};

export default useGithubUser;
