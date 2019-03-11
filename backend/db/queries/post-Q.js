const { db } = require('./connector.js');

//GET -> get to see all post -> influers/post/user/:id
const getPosts = (req, res, next) => {
    db.any('SELECT * FROM posts')
    .then( (post) => {
        res.status(200).json({
            status: 'Success',
            message: 'Got all Posts',
            post: post
        })
    }).catch(err => {
        console.log('Error retrieving all posts', err)
        return next(err)
    })
};

//Get ->  get to see the post of the user individually. -> influers/post/:id
const getPost = (req, res, next) => {
    const postId = Number(req.params.id);
    db.one('SELECT ')
};

//Get -> get post for types of multimedia. -> influers/posts/{type}
const getPostbytypeImg = (req, res, next) => {
    let postId = Number(req.params.id);
    db.one("SELECT * FROM posts WHERE post_type = 'img' ORDER BY RANDOM()  ")
    .then( (post) => {
        res.status(200).json({  
            status: 'Sucess',
            message: 'Got random Image',
            post: post
        })
    }).catch(err => {
        console.log("Error retrieving a random Image ", err)
        return next(err)
    })
};

//POST -> add a new post -> influers/post
const addPost = ( req, res, next) => {

};

//PATH ->  update a single post -> influers/post/:id
const updatePost = (req, res, next) => {

};

//DELETE -> delete a single post. -> influers/post/:id
const deletePost = (req, res, next) => {

};

module.exports = { getPosts, getPost, addPost, updatePost, deletePost }