const db = require('./connection');
const { User, Posts, Games } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Posts', 'posts');
  await cleanDB('Games', 'games');
  await cleanDB('User', 'users');

  const games = await Games.insertMany([
    { name: 'minecraft', image: 'https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image14-3.png' },
    { name: 'Roblox', image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Roblox_Logo_2021.png'  },
    { name: 'Cod', image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Logo_CoD.jpg'  }
  ]);

  console.log('games seeded');

  const posts = await Posts.insertMany([
    {
      title: 'Minecraft Base',
      text: 'How do you get logs to build a base?',
      username: 'Pamela',
      game: games[0]._id
    },
    {
      title: 'Farming Sim',
      text: 'I have 12 million money in roblox farming sim.',
      username: 'Pamela',
      game: games[1]._id
    },
    {
      title: 'Team Mates',
      text: 'Im new to cod pleas carry me. Add me at CoolUsername14' ,
      username: 'Elijah',
      game: games[2]._id
    },
    {
      title: 'Minecraft server',
      text: 'Any cool new hip servers out there?',
      username: 'Elijah',
      game: games[1]._id
    },
   
  ]);

  console.log('posts seeded');
  
  await User.create({
    username: 'Pamela',
    email: 'pamela@testmail.com',
    password: 'password12345',
    games: [games[0]._id, games[1]._id],
    posts: [posts[0]._id, posts[1]._id],
  });

  await User.create({
    username: 'Elijah',
    email: 'eholt@testmail.com',
    password: 'password12345',
    games: [games[1]._id, games[2]._id],
    posts: [posts[2]._id, posts[3]._id],
  });

  console.log('users seeded');

  

  process.exit();
});
