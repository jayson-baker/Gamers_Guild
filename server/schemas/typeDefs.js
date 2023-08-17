const typeDefs = `
  type Auth {
    token: ID
    user: User
  }
  type Key {
    access_token: String
    token_type: String
  }
  type Search {
    id: ID
    name: String
  }

  type User {
    _id: ID
    username: String
    email: String
    posts: [Post!]
    games: [Game!]
  }
  
  type Post {
    _id: ID
    username: String
    title: String
    text: String
    createdAt: String
    game: Game
    replies: [Post!]
  }
  
  type Game {
    _id: ID!
    name: String
    image: String
  }
  
  type Query {
    user: User
    posts: [Post!]
    getPost(_id: ID!): Post
    getGamesFromDB: Game
    getPostByGame(game: ID!): Post
    getApi: Key
    searchApiGame(name:String!, At: String!, Tt: String!): Search
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String): User
    updatePost(id: ID!, content: String): Post
    addPost(content: String!, gameId: ID!): Post
    deletePost(id: ID!): User
    addReply(post: ID!, content: String!): Post
    deleteReply(post: ID!, reply: ID!): Post
    addGameToDB(name: String!, image: String!): Game
    addGame(name: String!): Game
    deleteGame(id: ID!): User
    login(email: String!, password: String!): Auth
  }`;

module.exports = typeDefs;
