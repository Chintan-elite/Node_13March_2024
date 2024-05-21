const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const path = require("path")
const hbs = require("hbs")

const viewPath = path.join(__dirname,"../Templates/views")
const partialPath = path.join(__dirname,"../Templates/partials")
const publicPath = path.join(__dirname,'../public')

app.set("view engine","hbs")
app.set("views",viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicPath))


app.use("/",require("../router/userrouter"))

app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`);
})