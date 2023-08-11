const { User, Posts, Games } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // gets user information, including post and games for viewing profiles.
    user: async (context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        .populate({
          path: 'posts',
          select: '-__v'
        })
        .populate({
          path: 'games',
          select: '-__v'
        })
        .populate({
          path: 'friends',
          select: '-__v'
        });
        return user;
      }

      throw AuthenticationError;
    },
    //gets all posts
    posts:async (context) => {
      const post = await Posts.find()
      .populate({
        path: 'game',
        select: '-__v'
      })
      return post
    },
    //gets a post
    getPost: async (context) => {
      if (context.post) {
        const post = await Posts.findById(context.post._id)
        .populate({
          path: 'replies',
          select: '-__v'
        })
        .populate({
          path: 'game',
          select: '-__v'
        });
        return post;
      }

      throw AuthenticationError;
    },
    //gets a post
    getPostByGame: async (context) => {
      if (context.post) {
        const post = await Posts.findById(context.post.game._id)
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
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },
    updatePost: async (parent, args, context) => {
      if (context.user) {
        return await Posts.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        return await Posts.create(context.user._id, args, { new: true })
        .then( async ({_id})=> {
          return await User.findByIdAndUpdate(
            { _id: context.user._id  },
            { $push: { posts: _id } },
            { new: true })
        });
      }
      throw AuthenticationError;
    },
    deletePost: async (parent, {id}, context) => {
      if (context.user) {
        return await Posts.findOneAndRemove(id)
        .then( async ({_id})=> {
          return await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { posts: _id } },
            { new: true })
        });
      }
      throw AuthenticationError;
    },
    addReply: async (parent, args, context) => {
      if (context.user) {
        return await Posts.findOneAndUpdate(
          { _id: args.post._id },
          { $push: { replys: args.replys._id} },
          { new: true, runValidators: true }
      )
      }
      throw AuthenticationError;
    },
    deleteReply: async (parent, args, context) => {
      if (context.user) {
        return await Posts.findOneAndUpdate(
          { _id: args.post._id },
          { $pull: { replys: args.replys._id} },
          { new: true, runValidators: true })
      }
      throw AuthenticationError;
    },
    addGame: async (parent, args, context) => {
      if (context.user) {
        return await Games.create(context.user._id, args, { new: true })
        .then( async ({_id})=> {
          return await User.findByIdAndUpdate(
            { _id: context.user._id  },
            { $push: { games: _id } },
            { new: true })
        });
      }
      throw AuthenticationError;
    },
    deleteGame: async (parent, {id}, context) => {
      if (context.user) {
        return await Games.findOneAndRemove(id)
        .then( async ({_id})=> {
          return await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { games: _id } },
            { new: true })
        });
      }
      throw AuthenticationError;
    },
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
    },
    
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
    }
  }
};

module.exports = resolvers;