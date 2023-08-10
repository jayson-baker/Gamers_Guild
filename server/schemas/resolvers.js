const { User, Posts, } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
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
    posts: async (context) => {
      if (context.post) {
        const post = await Posts.findById(context.post._id)
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
