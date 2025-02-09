const express = require('express');
const viewMsgRouter = express.Router();
const { messages} = require('./../routers/index') 

viewMsgRouter.get('/:msg', (req, res) => {

   if(req.params -1 > messages.length) {
     next(new Error('PAGE NOT FOUND'))
   }
   const id = Number(req.params.msg)
   res.render('allMesages', {messages: messages, id: id})
})

module.exports = viewMsgRouter;