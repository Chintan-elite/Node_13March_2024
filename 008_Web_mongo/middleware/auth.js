const jwt = require("jsonwebtoken")

const auth = async (req,resp,next)=>{


    const token = req.cookies.jwt
   
    try {
        const data =  await jwt.verify(token,process.env.SKEY)

        if(data)
        {
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