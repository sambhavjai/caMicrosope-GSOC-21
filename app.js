const mongoose = require('mongoose');
const express = require('express');

const app=express();

mongoose.connect("mongodb://localhost:27017/gsoc",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("DB ERROR");
});

app.listen(8000,() => {
    console.log("Server is running");
});

