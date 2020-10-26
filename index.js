const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//connect to db
mongoose.connect( process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, ()=> console.log('connected to db!') );

//Middleware
app.use(express.json());
app.use('/api/posts', postRoute);


//Route middleware
app.use('/api/user', authRoute);

app.listen(3001, ()=> console.log('Server Up and Running'));