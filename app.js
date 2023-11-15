const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require("./router/user.route");
 require('./config/db');



app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(userRouter);



//home route
app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/./views/index.html');
})

//router not found
app.use((req,res,next)=>{
    res.status(404).json({ message: "404 Route Not Found"});
})

//server not found error
app.use((err,req,res,next)=>{
    res.status(500).json({ message: "server not found" });
})


module.exports = app;