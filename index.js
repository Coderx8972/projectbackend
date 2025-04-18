require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT  

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.get('/login',(req,res)=>{
    res.send(`<h1>LOGIN TO MY WEBSITE</h1>`)
})
app.get('/signup',(req,res)=>{
    res.send("<h2>SIGN UP TO MY WEBSITE</h2>")
})
app.listen(port,()=>console.log(`Sever starts at ${port}`))
