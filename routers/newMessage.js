const express = require('express');
const messageRouter = express.Router();
const { messages } = require('./index')

messageRouter.get('/', (req, res) => {
    res.render('form')
})

messageRouter.post('/', (req, res) => {
    const { messageName, author } = req.body
    messages.push({ text: messageName, user: author, added: new Date() });
    res.redirect('/')
})


module.exports = messageRouter;