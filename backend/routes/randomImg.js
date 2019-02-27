var express = require('express');
var router = express.Router();
let { getRandomImg } = require('../db/queries/randomImg-Q.js')

router.get('/', getRandomImg);
router.get('/login', getRandomImg);


module.exports = router;