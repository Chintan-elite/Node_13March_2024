const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const URL = process.env.URL
const mongoose = require("mongoose")
app.use(express.json())
mongoose.connect(URL).then(r=>{
    console.log("Db connected");
}).catch(err=>{
    console.log(err);
})


app.use("/users",require("../router/userrouter"))


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})