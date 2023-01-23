const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cookieParser = require('cookie-parser');
app.use(cookieParser());
var cors = require('cors')
app.use(cors())
const PORT=process.env.PORT || 5000;
const path=require("path")

dotenv.config({path: "./config.env"});

//database connection
require("./db/conn");
const User=require("./model/userSchema");
app.use(
    express.urlencoded({ extended: true })
);
    

app.use(express.json());

app.use(require("./router/auth"));

//serving frontend
app.use(express.static(path.join(__dirname, "./client/build")))

app.get("*", (req, res)=>
{
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function(err)
        {
            res.status(500).send(err);
        }
    )
})






app.listen(PORT, ()=>
{
    console.log(`server is running on port no ${PORT}`);
})