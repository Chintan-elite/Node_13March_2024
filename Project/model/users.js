const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : String
    },
    pass : {
        type : String
    }
})

userSchema.pre("save", async function(){
    if(this.isModified("pass"))
        {
            this.pass  =await bcrypt.hash(this.pass,10)
        }
})

module.exports = new mongoose.model("User",userSchema)