const express = require('express');
const userRoute = require('./routes/user');
const resumeRoute = require('./routes/resume')
const dotenv = require('dotenv');
const head_auth = require('./middleware/header')

require("./config/db");

const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json())
app.use(head_auth)
app.use("/user",userRoute);
app.use("/resume",resumeRoute);
app.listen(PORT, ()=> {
    console.log(`Server started on PORT : ${PORT}` );
})