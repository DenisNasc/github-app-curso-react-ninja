import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {List, Icon, Pagination} from 'semantic-ui-react';
import {UserRepositoriesSchema} from './types';

import formatDate from '../functions/formatDate';
import {StoreSchema} from '../../redux/store/types';
import {AplicationSchema} from '../../redux/reducers/aplication/types';

const UserRepositories = ({repositories}: UserRepositoriesSchema) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {showRepositories} = useSelector<StoreSchema, AplicationSchema>(state => state.aplication);

  return (
    <>
      <ListContainer isVisible={showRepositories}>
        <List id="list" link>
          {repositories
            .filter((_, i) => i < currentPage * 9 && i > (currentPage - 1) * 9)
            .map(repo => (
              <List.Item id="list-item" key={repo.id}>
                <a href={repo.linkTo}>
                  <Icon name="triangle right" />
                  <List.Content>
                    <List.Header>{repo.name}</List.Header>
                    <List.Description>
                      {`Repositório criado em: ${formatDate(repo.createdAt)}`}
                    </List.Description>
                  </List.Content>
                </a>
              </List.Item>
            ))}
        </List>
        <Pagination
          id="pagination"
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={1}
          lastItem={Math.ceil(repositories.length / 8)}
          siblingRange={1}
          totalPages={Math.ceil(repositories.length / 8)}
          onPageChange={(e, {activePage}) =>
            setCurrentPage(typeof activePage === 'number' ? activePage : Number(activePage))
          }
        />
      </ListContainer>
    </>
  );
};

const ListContainer = styled.div`
  display: ${(props: {isVisible: boolean}) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  right: 216px;
  bottom: 20px;
  align-items: center;
  height: 230px;
  width: 900px;
  background: #fff;

  #list {
    display: flex;
    #list-item {
      margin-top: 20px;
      width: 100%;
      a {
        display: flex;
      }
    }

    #pagination {
      position: absolute;
      bottom: ;
    }
  }
`;

export default UserRepositories;
