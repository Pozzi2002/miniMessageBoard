const db = require('../db/queries')

const messages = [
    {
        text: 'Hi there',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    }
]


const indexMsgController = async (req, res) => {
    const message = await db.getAllMessages()
    res.render('index', {messages: message})
}


module.exports = {
    messages,
    indexMsgController
}