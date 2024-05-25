const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
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
    },
    Tokens : [
        {
            token : {
                type:String
            }
        }
    ]
})

userSchema.pre("save", async function(){
    if(this.isModified("pass"))
        {
            this.pass  =await bcrypt.hash(this.pass,10)
        }
})

userSchema.methods.generateToken = async function(){
    try {
        const token = await jwt.sign({_id:this._id},process.env.S_KEY)
        this.Tokens = this.Tokens.concat({token:token})
        this.save()
        return token
    } catch (error) {
        console.log(error);
    }
}

module.exports = new mongoose.model("User",userSchema)