const express = require("express")
const router = express.Router()
const User = require("../model/users")


router.get("/",async(req,resp)=>{
    try {
        const users = await User.find()
        resp.send(users)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id",async(req,resp)=>{
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

router.put("/:id",async(req,resp)=>{
   
        const _id = req.params.id
        try {
           
            const data = await User.findByIdAndUpdate(_id,req.body)
            resp.send(data)
            
        } catch (error) {
            resp.send(error)
        }

})

router.delete("/:id",async(req,resp)=>{
    const _id = req.params.id
    try {
       
        const data = await User.findByIdAndDelete(_id)
        resp.send(data)
        
    } catch (error) {
        resp.send(error)
    }
})



module.exports = router