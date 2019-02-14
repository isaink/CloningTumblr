var express = require('express');
var router = express.Router();
const { 
  getUser, 
  addUser, 
  updateUser, 
  deleteUser } = require('../db/queries/users-Q')

//Getting Routes...
router.get('/users/:id', getUser);
router.post('/users', addUser );
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
