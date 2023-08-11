const typeDefs = `
  type Auth {
    token: ID
    user: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    posts: [Post!]!
    games: [Game!]!
    friends: [User!]!
  }
  
  type Post {
    _id: ID!
    content: String!
    game: Game!
    replies: [Post!]!
  }
  
  type Game {
    _id: ID!
    name: String!
    image: String!
  }
  
  type Query {
    user: User
    posts: [Post!]!
    getPost: Post
    getPostByGame: Post
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String): User
    updatePost(id: ID!, content: String): Posts
    addPost(content: String!, gameId: ID!): Posts
    deletePost(id: ID!): User
    addReply(post: ID!, content: String!): Posts
    deleteReply(post: ID!, reply: ID!): Post
    addGameToDB(name: String!, image: String!): Games
    addGame(name: String!): Games
    deleteGame(id: ID!): User
    addFriend(id: ID!): User
    deleteFriend(id: ID!): User
    login(email: String!, password: String!): Auth
  }`;

module.exports = typeDefs;
