const { db } = require('./connector.js');  //connecting to the database

//GET -> get the users that user follow -> influers/following
const getFollowing = (req, res, next) => {
    db.any('SELECT * FROM follows WHERE  ')
    .then()
};

//GET -> get the user followers ->  influers/followers
const getFollowers = (req, res, next) => {
    db.any('SELECT ')
};
module.exports = { getFollowing, getFollowers }

// SELECT * 
// FROM follows
// JOIN users
// ON followed = users.id
// WHERE users.id = 1