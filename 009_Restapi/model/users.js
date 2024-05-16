const mongoose =  require("mongoose")
const bcrypt = require("bcryptjs")

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

usershcema.pre("save",async function(){

        if(this.isModified("pass"))
        {
            this.pass = await bcrypt.hash(this.pass,10)
        }

})


module.exports = new mongoose.model("User",usershcema)