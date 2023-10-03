const express=require('express');
const dotenv = require('dotenv');
const app= express();
const connect = require('./mongodb/config');
const bodyParser = require('body-parser')
const UserRouter=require('./routers/userrouter')
const signupValidation=require('./validator/SigninValidation')
app.use(bodyParser.json())
dotenv.config();

const PORT = process.env.PORT;

connect();

app.use('/user',UserRouter)
app.listen(PORT, () => { console.log(`Server started at ${PORT}`) })



