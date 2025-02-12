const express = require('express');
const messageRouter = express.Router();
const { messages } = require('./index')
const messageController = require('../controllers/createMessagesController');


messageRouter.get('/', messageController.getMessageController)

messageRouter.post('/', messageController.postMessageController)


module.exports = messageRouter;