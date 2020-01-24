const articlesRouter = require('./app/routes/articles');
const mongoose = require('mongoose');
const db = require('./config/db');

// Establish Database Connection
mongoose.connect(db, {useNewUrlParser: true});
mongoose.connection.once('open', function() {
  console.log('connected to mongo');
});
const express = require('express');

const indexRouter = require('./app/routes/index');


const app = express ();
app.use(express.json());

app.use(indexRouter);
app.use(articlesRouter);


const port = process.env.PORT || 7000;
app.listen(port, function(){
    console.log(`Blog Express App is listening on port ${port}`);
})
