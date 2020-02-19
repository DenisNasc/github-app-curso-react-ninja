import React from 'react';
import styled from 'styled-components';
import {Image, Card, Icon, List} from 'semantic-ui-react';

interface GithubUser {
  nickname: string;
  avatarURL: string;
  name: string;
  createdAt: string;
  description: string;
  repos: number;
  following?: number;
  followers?: number;
}

const GithubUser = ({
  nickname,
  avatarURL,
  name,
  createdAt,
  description,
  repos,
  following = 0,
  followers = 0
}: GithubUser) => {
  const formatDate = () => {
    const dateUnformated = new Date(createdAt);
    const dateFromated = `Entrou no Github em: ${dateUnformated.getDate()}/${dateUnformated.getMonth()}/${dateUnformated.getFullYear()}`;
    return dateFromated;
  };
  return (
    <CardContainer>
      <a href={`https://github.com/${nickname}`}>
        <Image src={avatarURL} wrapped />
      </a>
      <Card.Content id="content-1">
        <Card.Header id="name">{name}</Card.Header>

        <Card.Meta id="created-at">
          <span>{formatDate()}</span>
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
        <a href="/">
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </CardContainer>
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
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export default GithubUser;
