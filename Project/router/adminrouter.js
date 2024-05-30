const express = require("express")
const router = express.Router()
const User = require("../model/users")
const auth = require("../middleware/auth")
const bcrypt = require("bcryptjs")
const Admin = require("../model/admins")
const jwt = require("jsonwebtoken")
const aauth = require("../middleware/aauth")

router.get("/admin",(req,resp)=>{
    resp.render("adminlogin")
})

router.get("/dashboard",aauth,(req,resp)=>{
    resp.render("dashboard")
})

router.post("/adminlogin",async(req,resp)=>{

    const username = req.body.username
    const password = req.body.password

    try {
        
        const data = await Admin.findOne({username:username})

       


        
        if(password==data.password)
        {
            
            const token = await jwt.sign({_id:data._id},process.env.A_KEY)
            resp.cookie("ajwt",token)
            resp.redirect("dashboard")
        }
        else{
            
            resp.render("adminlogin",{"msg":"Invalid credentials"})
        }


    } catch (error) {
        console.log(error);
        resp.render("adminlogin",{"msg":"Invalid credentials"})
    }


})

module.exports=router