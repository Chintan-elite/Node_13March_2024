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
    password :
    {
        type : String
    }

})


userSchema.pre("save", async function(){

    this.password = await bcrypt.hash(this.password,10)

})



module.exports = new mongoose.model("User",userSchema)