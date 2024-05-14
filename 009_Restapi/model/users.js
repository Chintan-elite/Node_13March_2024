const mongoose =  require("mongoose")


const usershcema = new mongoose.Schema({
    name  :{
        type:String,
        required:true
    },
    email : {
        type:String,
        unique : true
    },
    pass : {
        type : String
    },
    age : {
        type : Number
    }
})

module.exports = new mongoose.model("User",usershcema)