const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const hbs = require("hbs")
const path = require("path")
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
const PORT = process.env.PORT
const URL = process.env.URL


mongoose.connect(URL).then(data=>{
    console.log("DB connected");
}).catch(err=>{
    console.log(err);
})






const viewpath = path.join(__dirname,'./templates/views')
const partialpath = path.join(__dirname,'./templates/partials')
const publicpath = path.join(__dirname,'./public')

app.set('view engine','hbs')
app.set('views',viewpath)
app.use(express.static(publicpath))
hbs.registerPartials(partialpath)



app.use("/",require("./router/userrouter"))







app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})