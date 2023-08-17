import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $text: String!, $username: String!) {
    addPost(title: $title, text: $text, username: $username) {
      token
      user{
        _id
      }
      _id
    }
  }
`;
export const ADD_GAME_TO_DB = gql`
  mutation AddGameToDB($input: GameInput!) {
    addGameToDB(input: $input) {
      _id
      name
    }
  }
`;

export const ADD_GAME = gql`
  mutation AddGame($id: ID!) {
    addGame(id: $id) {
      _id
      username
      games {
        _id
        name
      }
    }
  }
`;
