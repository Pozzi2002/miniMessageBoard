const express = require('express');
const viewMsgRouter = express.Router();
const db = require('../db/queries');



viewMsgRouter.get('/:msg', async (req, res) => {
  const message = await db.getAllMessages();
  
   if(req.params -1 > message.length) {
     next(new Error('PAGE NOT FOUND'))
   }
   
   const id = Number(req.params.msg)

   res.render('allMesages', {messages: message, id: id})
})

module.exports = viewMsgRouter;