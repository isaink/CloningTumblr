const {
getPosts, 
getPost, 
getPostbytype, 
addPost, 
updatePost, 
deletePost
} = require('../db/queries/post-Q');

//Getting Routes for POSTS

router.get('/dashboard', getPosts);