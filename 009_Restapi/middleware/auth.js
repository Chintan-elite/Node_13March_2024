const jwt = require("jsonwebtoken")
const User = require("../model/users")
const auth = async (req,resp,next)=>{

        const token = req.header("auth-token")

        try {
            
          const data =   await jwt.verify(token,process.env.S_KEY)
          if(data)
            {
                next()
            }
            else{
                resp.send("Invalid token")
            }

        } catch (error) {
            
                resp.send("Invalid token")


        }


}

module.exports=auth