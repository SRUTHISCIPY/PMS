const express=require('express');
const dotenv = require('dotenv');
const app= express();
const connect = require('./mongodb/config');
const bodyParser = require('body-parser')
const cors = require('cors')
const UserRouter=require('./routers/userrouter')
const CustomerRouter=require('./routers/CustomerRouter')
app.use(cors())
app.use(bodyParser.json())
app.use('/customer',CustomerRouter)
app.use('/user',UserRouter)
dotenv.config();

const PORT = process.env.PORT;

connect();

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) })



