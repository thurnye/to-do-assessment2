var express = require('express');
var router = express.Router();
var Ctrl = require('../controller/controller')

/* GET home page. */
router.get('/', Ctrl.getIndex);
router.post('/', Ctrl.postTodo);

module.exports = router;
