const express = require('express');
const cors =require('cors');
const blogroute=require("./routes/blogroute.js")
const authroute=require("./routes/authroute.js")


const app= express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cors());


app.listen(3000,()=>{
    console.log("connected");   
})

app.use('/blog',blogroute);
app.use('/auth',authroute)