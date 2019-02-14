const { db } = require('./connector.js');  //connecting to the database

//GET -> get all liked posts -> /influers/likes
const getLikedPost = (req, res, next) => {
    db.any('SELECT * FROM likes JOIN posts ON posts.id = likes.liked_posts WHERE id=${id}', {
        id: req.params.id 
    }).then((likes) => {
        res.status(200).json({
        status: 'Success',
        message: 'Got all liked posts',
        body: likes
        })
    }).catch(err => {
    console.log("Error retrieving all liked posts: ", err)
    return next(err)
    })
};

//POST -> add a new like -> /influers/like
const addLike = (req, res, next) => {
    db.none('INSERT INTO likes(id, liked_posts) ' + 
    'VALUES( ${id}, ${liked_posts})', req.body)
    .then(() => {
        res.status(200).json({
          status: 'Success',
          message: 'Added a new like to post',
        })
    }).catch(err => {
        console.log("Error adding a new like to post: ", err)
        return next(err)
    })
};

//DELETE -> delete a single liked post -> /influers/like/:id
const deleteLike = (req, res, next) => {
    let likeId = parseInt(req.params.id);
    db.result('DELETE FROM likes WHERE id=$1', likeId)
    .then(() => {
      res.status(200).json({
        status: 'Success',
        message: 'Like Deleted',
      })
    }).catch(err => {
      console.log("Error deleting like: ", err)
      return next(err)
    })
}
module.exports = { getLikedPost, addLike, deleteLike }