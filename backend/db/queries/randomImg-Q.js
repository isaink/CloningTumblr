const { db } = require('./connector');

const getRandomImg = (req, res, next) => {
    db.one("SELECT * FROM posts WHERE post_type = 'img' ORDER BY RANDOM()  ")
    .then((post) => {
        res.status(200).json({  
            status: 'Sucess',
            message: 'Got random Image',
            body: post
        })
    }).catch(err => {
        console.log("Error retrieving a random Image ", err)
        return next(err)
    })
};

module.exports = {  getRandomImg  }

