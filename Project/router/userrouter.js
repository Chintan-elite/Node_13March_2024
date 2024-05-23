const express = require("express")
const router = express.Router()
const User = require("../model/users")


router.get("/",(req,resp)=>{
    resp.render("index")
})


router.get("/contact",(req,resp)=>{
    resp.render("contact")
})

router.get("/detail",(req,resp)=>{
    resp.render("detail")
})

router.get("/shop",(req,resp)=>{
    resp.render("shop")
})

router.get("/cart",(req,resp)=>{
    resp.render("cart")
})

router.get("/login",(req,resp)=>{
    resp.render("login")
})


router.get("/reg",(req,resp)=>{
    resp.render("reg")
})


router.post("/userreg",async(req,resp)=>{
    try {
       const user = new User(req.body)
       const dt = await user.save()

       resp.render("reg",{"msg":"registration successfully !!!"})
    } catch (error) {
        console.log(error);
    }
})



module.exports=router