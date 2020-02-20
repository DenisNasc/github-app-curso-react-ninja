import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {Image, Card, Icon, List, Button} from 'semantic-ui-react';
import {GithubUserSchema} from './types';

import formatDate from '../functions/formatDate';
import {TOGGLE_SHOW_REPOSITORIES} from '../../redux/actions/aplication';

const GithubUser = ({
  nickname,
  email,
  avatarURL,
  name,
  createdAt,
  description,
  repos,
  following,
  followers
}: GithubUserSchema) => {
  const dispatch = useDispatch();

  return (
    <>
      <CardContainer>
        <a href={`https://github.com/${nickname}`}>
          <Image src={avatarURL} wrapped />
        </a>
        <Card.Content id="content-1">
          <Card.Header id="name">{name}</Card.Header>

          <Card.Meta id="created-at">
            <span>{`Entrou no Github em: ${formatDate(createdAt)}`}</span>
          </Card.Meta>

          <Card.Description id="description">{description}</Card.Description>
        </Card.Content>
        <Card.Content id="repos">
          <List id="list">
            <List.Item id="list-item">{`Repositórios: ${repos}`}</List.Item>
            <List.Item id="list-item">{`Seguidores: ${followers}`}</List.Item>
            <List.Item id="list-item">{`Seguindo: ${following}`}</List.Item>
          </List>
        </Card.Content>

        <Card.Content extra>
          <span>
            <Icon name="mail" />
            {email || 'No email provided'}
          </span>
        </Card.Content>

        <Button
          primary
          id="button-repositories"
          content="Ver repositórios"
          onClick={() => dispatch({type: TOGGLE_SHOW_REPOSITORIES})}
        />
      </CardContainer>
    </>
  );
};

const CardContainer = styled(Card)`
  #content-1 {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    #name {
      width: 100%;
      margin-bottom: 10px;
    }
    #created-at {
      width: 100%;
      margin: 0;
    }

    #description {
      width: 100%;
    }
  }

  #repos {
    width: 100%;
    padding: 10px;

    #list {
      display: flex;
      #list-item {
        font-size: 12px;
        margin: 0px 5px;
        padding: 0;
      }
    }
  }

  #button-repositories {
    width: calc(100% - 10px);
    padding: 20px 0px;
    margin: 5px;
  }
`;

export default GithubUser;
