const { User, Posts, Games } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const validateTwitch = require("../utils/api");
const apiCall = require("../utils/api2");

const resolvers = {
  Query: {
    // gets user information, including post and games for viewing profiles.
    user: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const user = await User.findById(context.user._id)
          .populate({
            path: "posts",
            select: "-__v",
          })
          .populate({
            path: "games",
            select: "-__v",
          });
        user.posts.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
      throw AuthenticationError;
    },
    //gets all posts
    posts: async (context) => {
      const post = await Posts.find().populate({
        path: "game",
        select: "-__v",
      });
      return post;
    },
    //gets a post
    getPost: async ({ _id }, context) => {
      const post = await Posts.findById(_id)
        .populate({
          path: "replies",
          select: "-__v",
        })
        .populate({
          path: "game",
          select: "-__v",
        });
      return post;
    },
    getApi: async () => {
      const key = await validateTwitch();
      return key;
    },
    searchApiGame: async (parent, args, ) => {
      console.log("call made");
      let searched = args.name
      let ath = args.at
      const call =  await apiCall(searched, ath);
      console.log(call);
      let id = call.data.id
      let gname = call.data.name
      return {id,gname}
    },
    //gets games saved to db to search for posts.
    getGamesFromDB: async (context) => {
      const games = await Games.find();
      return games;
    },

    //gets a post by its game tag
    getPostByGame: async (args, context) => {
      if (args.post) {
        const post = await Posts.findById(args.post.game._id);
        return post;
      }

      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    updatePost: async (parent, args, context) => {
      if (context.user) {
        return await Posts.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        return await Posts.create(args, { new: true }).then(async ({ _id }) => {
          return await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { posts: _id } },
            { new: true }
          );
        });
      }
      throw AuthenticationError;
    },
    deletePost: async (parent, { id }, context) => {
      if (context.user) {
        return await Posts.findOneAndRemove(id).then(async ({ _id }) => {
          return await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { posts: _id } },
            { new: true }
          );
        });
      }
      throw AuthenticationError;
    },
    addReply: async (parent, args, context) => {
      if (context.user) {
        return await Posts.findOneAndUpdate(
          { _id: args.post._id },
          { $push: { replies: args.replies._id } },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticationError;
    },
    deleteReply: async (parent, args, context) => {
      if (context.user) {
        return await Posts.findOneAndUpdate(
          { _id: args.post._id },
          { $pull: { replies: args.replies._id } },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticationError;
    },
    addGameToDB: async (parent, args) => {
      const game = await Games.create(args);

      return game;
    },
    addGame: async (parent, { id }, context) => {
      if (context.user) {
        return await Games.findByID(id, { new: true }).then(async ({ _id }) => {
          return await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { games: _id } },
            { new: true }
          );
        });
      }
      throw AuthenticationError;
    },
    deleteGame: async (parent, { id }, context) => {
      if (context.user) {
        return await Games.findByID(id).then(async ({ _id }) => {
          return await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { games: _id } },
            { new: true }
          );
        });
      }
      throw AuthenticationError;
    },

    /* if have extra time
    addFriend: async (parent, {id}, context) => {
      if (context.user) {
        const user = await User.findOne( id)
        .then( async ({friend})=> {
          if (!friend) {
            return res.status(404).json({ message: 'No user found with this id' });
        }
          return await User.findByIdAndUpdate(
            { _id: context.user._id  },
            { $push: { friends: id } },
            { new: true })
        });
      }
      throw AuthenticationError;
    },
    deleteFriend: async (parent, {id}, context) => {
      if (context.user) {
        const user = await User.findOne( id)
        .then( async ({friend})=> {
          if (!friend) {
            return res.status(404).json({ message: 'No user found with this id' });
        }
          return await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { friends: id } },
            { new: true })
        });
      }
      throw AuthenticationError;
    },*/

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
