import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User {
    user {
      posts {
        createdAt
        text
        title
        game {
          name
          image
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  query Posts {
    posts {
      title
      text
      game {
        name
        image
      }
      createdAt
      username
    }
  }
`;
export const QUERY_ALL_Games = gql`
  {
    games {
      _id
      name
      image
    }
  }
`;

export const QUERY_GETAPI = gql`
  query GetApi {
    getApi {
      access_token
      token_type
    }
  }
`;

export const QUERY_POST = gql`
  query getPost($posts: [ID]!) {
    getPost(post: $posts) {
      _id
      username
      title
      createdAt
      game {
        _id
        name
        image
      }
      replies {
        _id
        text
        username
        createdAt
      }
    }
  }
`;
export const QUERY_SEARCH_API = gql`
query SearchApiGame($name: String!, $at: String!, $tt: String!){
  searchApiGame(name: $name, at: $at, tt: $tt){
    id
    name
    }
  }
`;

export const QUERY_POSTS_BY_GAME = gql`
  query getPosts($game: ID) {
    products(game: $game) {
      _id
      username
      title
      createdAt
      game {
        _id
        username
        title
        createdAt
        game {
          _id
          name
        }
      }
    }
  }
`;
