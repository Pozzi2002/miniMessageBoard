const express = require('express');
const app = express();
const path = require('node:path');
const { indexRouter } = require('./routers/index')
const messageRouter = require('./routers/newMessage')
const viewMsgRouter = require('./routers/message')

app.use(express.urlencoded({ extended: true }));

app.use("/msg", viewMsgRouter);
app.use("/new", messageRouter);
app.use("/", indexRouter);


app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send('PAGE NOT FOUND')
})

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server started...'))