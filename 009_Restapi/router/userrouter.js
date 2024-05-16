const express = require("express")
const router = express.Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")


router.get("/",auth,async(req,resp)=>{
    try {
        const users = await User.find()
        resp.send(users)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id",auth,async(req,resp)=>{
    const _id = req.params.id
    try {
        const users = await User.findOne({_id:_id})
        resp.send(users)
    } catch (error) {
        resp.send(error)
    }
})


router.post("/",async(req,resp)=>{
   
    try {
        const user = new User(req.body)
        const data = await user.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }


})

router.put("/:id",auth,async(req,resp)=>{
   
        const _id = req.params.id
        try {
           
            const data = await User.findByIdAndUpdate(_id,req.body)
            resp.send(data)
            
        } catch (error) {
            resp.send(error)
        }

})

router.delete("/:id",auth,async(req,resp)=>{
    const _id = req.params.id
    try {
       
        const data = await User.findByIdAndDelete(_id)
        resp.send(data)
        
    } catch (error) {
        resp.send(error)
    }
})


router.post("/login",async(req,resp)=>{

    const email = req.body.email
    const pass = req.body.pass
    try {
        
            const data = await User.findOne({email:email})

            var isValid =  await bcrypt.compare(pass,data.pass)
            if(isValid)
                {

                    const token = await jwt.sign({_id:data._id},process.env.S_KEY)
                    resp.send("Welcome : "+data.name+" "+"auth-token : "+token)
                }
                else{
                    resp.send("Invalid credentials !!!")
                }

    } catch (error) {
        
        resp.send("Invalid credentials !!!")
    }


})


module.exports = router