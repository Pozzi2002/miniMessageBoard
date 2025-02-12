const db = require('../db/queries');

exports.getMessageController = (req, res) => {
    res.render('form')
}

exports.postMessageController = async (req, res) => {
    const {messageName, author } = req.body;
    await db.createMsg(messageName, author, new Date());
    res.redirect('/')
}