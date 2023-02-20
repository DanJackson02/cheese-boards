const { Cheese } = require('./cheese');
const { Board } = require('./board');
const { User } = require('./User');

// Multiple Boards can be added to a User.
// A Board can have many Cheeses
// - A Cheese can be on many Boards

User.hasMany(Board)
Board.hasMany(Cheese)
Cheese.belongsToMany(Board)

module.exports = { Cheese, Board, User }