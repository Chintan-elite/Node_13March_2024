const mongoose = require("mongoose")


const url = "mongodb://localhost:27017/student";

mongoose.connect(url).then(data=>{

    console.log("db connected");

}).catch(err=>{
    console.log(err);
})