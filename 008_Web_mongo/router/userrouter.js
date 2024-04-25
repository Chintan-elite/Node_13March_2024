const express = require("express")
const router = express.Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")
router.get("/",(req,resp)=>{
    resp.render('index')
})

router.get("/login",(req,resp)=>{
    resp.render("login")

})

router.post('/reg',(req,resp)=>{

        const user = new User(req.body)
      
        user.save().then(data=>{
            
            resp.render("index",{msg:"Registration success"})

        }).catch(err=>{
            console.log(err);
        })

  
})


router.get("/display",async(req,resp)=>{

    const data = await User.find();
    resp.render("display",{"data":data})
})

router.get("/delete",async(req,resp)=>{

       const _id = req.query.did
        await User.findByIdAndDelete(_id)
        resp.redirect("display")
})

router.get("/edit",async(req,resp)=>{

    const _id = req.query.eid 
    const data =await User.findOne({_id:_id})
    resp.render("update",{"data":data})
})

router.post("/update",async(req,resp)=>{

        const id = req.body.id
        const data = req.body
        await User.findByIdAndUpdate(id,data)
        resp.render("update",{"msg":"Update successfully !!!"})



})


router.post("/userlogin",async (req,resp)=>{

    const email = req.body.email
    const password = req.body.password

    try {
        
        const data = await User.findOne({email:email})
        const isValid =  await bcrypt.compare(password,data.password)
        if(isValid)
        {
            resp.redirect("display")
        }
        else{
            resp.render("login",{"msg":"Invalid credentials"})
        }


    } catch (error) {
        resp.render("login",{"msg":"Invalid credentials"})
    }

})



module.exports=router