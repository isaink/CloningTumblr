const passport = require("passport");
const { db } = require('./connector.js');  //connecting to the database

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        db.one("SELECT * FROM users WHERE username = ${username}", {
            username: username
        }).then(user => {
            done(null, user.username);
        }).catch(err => {
            done(err, null);
        });
    });
};