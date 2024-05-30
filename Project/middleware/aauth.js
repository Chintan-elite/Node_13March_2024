const jwt = require("jsonwebtoken")
const Admin = require("../model/admins")
const auth = async (req,resp,next)=>{


    const token = req.cookies.ajwt
   
    try {
        const data =  await jwt.verify(token,process.env.A_KEY)
        
       
        if(data)
        {
            
            next()
        }
        else
        {
            resp.render("adminlogin",{"msg":"please login first"})
        }
    } catch (error) {
        resp.render("adminlogin",{"msg":"please login first"})
    }
   
}

module.exports=auth