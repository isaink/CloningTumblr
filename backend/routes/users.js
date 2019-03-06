var express = require('express');
var router = express.Router();

const {
  getUser, 
  getUserbyEmail,
  createUser,
  logoutUser, 
  loginUser, 
  isLoggedIn,
  addUser, 
  updateUser, 
  deleteUser,
  getPic
} = require('../db/queries/users-Q')

const passport = require("../auth/local");
const { loginRequired } = require("./../auth/helpers");

//Getting Routes...
router.get('/users/:id', getUser);  //
router.get('/users/dashboard', getPic);
router.post('/users', addUser); // this isn't need it anymore, I will use CREATE USER 
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/dasboard', getUserbyEmail ); 

// Routes for user AUTH
router.post("/new", createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;
