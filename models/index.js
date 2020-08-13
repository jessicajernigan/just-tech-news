// This file will become more important as we create more models, but for now it'll just be for collecting and exporting the User model data.

const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');


// Create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.belongsToMany(Post, {
  through: Vote, // Allow both the User and Post models to query each other's information in the context of a vote.
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote, // Allow both the User and Post models to query each other's information in the context of a vote.
  as: 'voted_posts',
  foreignKey: 'post_id'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});





module.exports = { User, Post, Vote };