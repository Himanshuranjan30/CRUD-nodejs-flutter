const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postroutes= require('./routes/posts')
var cors = require('cors')
const bodyparser= require('body-parser');
app.get((req, res) => {
   res.send('We are at home')

});
app.use(cors());
app.use(bodyparser.json());
app.use('/posts',postroutes)

/*app.use('/posts',()=>{
    console.log('hey its a middleware')
})*/




mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
    console.log('connected to db')
})
app.listen(5000);