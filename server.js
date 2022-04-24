const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

//Database connection establishment
connectDB();

const app = express();

app.use(express.json())

app.use('/api/v1/transactions',require('./routes/api/transactions'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started at port ${PORT}`))