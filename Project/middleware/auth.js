const jwt = require("jsonwebtoken")
const User = require("../model/users")
const auth = async (req,resp,next)=>{


    const token = req.cookies.jwt
   
    try {
        const data =  await jwt.verify(token,process.env.S_KEY)
        const userdata = await User.findOne({_id:data._id})

        const tokendata =  userdata.Tokens.find(ele=>{
            return ele.token == token
        })

        if(tokendata==undefined)
            {
                resp.render("login",{"msg":"please login first"})
                return;
            }

        if(data)
        {
            req.user = userdata
            req.token = token
            next()
        }
        else
        {
            resp.render("login",{"msg":"please login first"})
        }
    } catch (error) {
        resp.render("login",{"msg":"please login first"})
    }
   
}

module.exports=auth