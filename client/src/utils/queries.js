import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      usernname
      posts {
        _id
        title
        createdAt
        games {
            _id
            name
        }
      }
      games {
        _id
        name
        image
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  {
    posts {
      _id
      username
      title
      createdAt
      game {
        _id
        username
        title
        text
        createdAt
        game{
            _id
            name
            image
        }
    }
  }
`;
export const QUERY_ALL_Games = gql`
  {
    games {
      _id
      name
    }
  }
`;

export const QUERY_GETAPI = gql`
  {
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

export const QUERY_POSTS_BY_GAME = gql`
  query getPosts($game: ID) {
    products(game: $game) {
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
`;
