const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")
const hbs = require("hbs")

const viewpath = path.join(__dirname,"templates/views")
const partialpath = path.join(__dirname,"templates/partials")

app.set("view engine","hbs")
app.set("views",viewpath)
hbs.registerPartials(partialpath)

app.get("/",(req,resp)=>{
    resp.render("index")
})

app.get("/home",(req,resp)=>{
    resp.render("home",{"name":"Shradhdha"})
})

app.get("/about",(req,resp)=>{
    resp.render("about")
})

app.get("/contact",(req,resp)=>{
    resp.render("contact")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})