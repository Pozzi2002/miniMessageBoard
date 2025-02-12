const express = require('express');
const indexRouter = express.Router();
const { indexMsgController } = require('../controllers/indexController')


indexRouter.get('/', indexMsgController);


module.exports = { indexRouter };