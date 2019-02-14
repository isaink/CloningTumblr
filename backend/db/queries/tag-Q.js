const { db } = require('./connector.js');  //connecting to the database

// GET -> get all post by that tag. -> influers/tagged/{tag}
const getPostbyTag = (req, res, next) => {
    db.any('SELECT * FROM tags JOIN posts ON posts.id = tags.post WHERE id=${id}', {
        id: req.params.id 
    }).then((tag) => {
        res.status(200).json({
        status: 'Success',
        message: 'Got all posts by that tag',
        body: tag
        })
    }).catch(err => {
    console.log("Error retrieving a single user: ", err)
    return next(err)
    })
};

// POST -> add a new tag to post -> influers/tagged/{tag}
const addTag = (req, res, next) => {
    db.none('INSERT INTO tags(id, tagname, post) ' + 
    'VALUES( ${id}, ${tagname}, ${post} )', req.body)
    .then(() => {
        res.status(200).json({
          status: 'Success',
          message: 'Added a new tag to post',
        })
    }).catch(err => {
        console.log("Error adding a new tag to post: ", err)
        return next(err)
    })
};

module.exports = { getPostbyTag, addTag }