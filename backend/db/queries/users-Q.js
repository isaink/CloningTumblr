const { db } = require('./connector.js');  //connecting to the database

// GET -> Get a single user info -> /influers/user/:id 
const getUser = (req, res, next) => {
    const userId = Number(req.params.id);
    db.one('SELECT * FROM users WHERE id=$1', [userId])
    .then((user) => {
        res.status(200).json({
        status: 'Success',
        message: 'Got a single user',
        body: user
        })
    }).catch(err => {
    console.log("Error retrieving a single user: ", err)
    return next(err)
    })
};

// POST -> Create a user  -> /influers/users
const addUser = (req, res, next) => {
    db.none('INSERT INTO users ( username, email)' + 
    ' VALUES(${username}, ${email} )', req.body)
    .then(() => {
        res.status(200).json({
            status: 'Success',
            message: 'New user added'
        })
    }).catch(err => {
        console.log("Error adding a new user: ", err)
        return next(err)
    })
};

// PATCH -> Edit user account -> /influers/user/:id
const updateUser = (req, res, next) => {
    db.none('UPDATE users SET username=${username},  blogname=${blogname}, email=${email}, profile_pic=${profile_pic} WHERE id=${id}', {
        id: Number(req.params.id),
        username: req.body.username,
        blogname: req.body.blogname,
        email: req.body.email,
    
        profile_pic: req.body.profile_pic,
    }).then(() => {
        res.status(200).json({
            status: 'Success',
            message: 'User Updated'
        })
    }).catch(err => {
        console.log("Error updating user: ", err)
        return next(err)
    })
};

// DELETE -> Delete a user -> `/influers/user/:id
const deleteUser  = (req, res, next) => {
    let userId = parseInt(req.params.id);
    db.result('DELETE FROM users WHERE id=$1', userId)
    .then((user)=> {
        res.status(200).json({
            status: 'Success',
            message: 'User Deleted'
        })
    }).catch(err => {
        console.log("Error deleting user: ", err)
        return next(err)
    })
};

module.exports = { getUser, addUser, updateUser, deleteUser }