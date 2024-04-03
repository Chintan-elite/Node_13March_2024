const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")

app.get("/",(req,resp)=>{
    
    resp.sendFile(path.join(__dirname,"index.html"))
})

app.get("/home",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"))
})



app.get("/About",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"about.html"))
})


app.get("*",(req,resp)=>{
    resp.send("Page not found")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})

