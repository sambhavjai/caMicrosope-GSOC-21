const mongoose = require('mongoose');
const express = require('express');
const userRoute = require('./routes/user');

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

app.use(express.json());

app.use("/api",userRoute);

app.listen(8000,() => {
    console.log("Server is running");
});

