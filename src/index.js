const express = require("express")
const mongoose= require('mongoose')
const app= express()
const route=require('./router/index.router')

app.use(route)
app.use(express.json())



mongoose.connect("mongodb://localhost:27017/form").then(()=>{
    console.log("Db is connected")
}).catch((e)=>e)



app.listen(3000,()=>{
    console.log("connected")
})