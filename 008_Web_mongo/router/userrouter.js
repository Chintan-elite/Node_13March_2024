const express = require("express")
const router = express.Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
const multer = require("multer")
const fs = require("fs")

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images')
    },
    filename:function(reg,file,cb)
    {
        cb(null, Date.now()+"_"+file.originalname)
    }
    
})

var upload = multer({storage:storage})



router.get("/",(req,resp)=>{
    resp.render('index')
})

router.get("/login",(req,resp)=>{
    resp.render("login")

})

router.post('/reg',upload.single("img"),(req,resp)=>{


        const user = new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            img:req.file.filename
        })
      
        user.save().then(data=>{
            
            resp.render("index",{msg:"Registration success"})

        }).catch(err=>{
            console.log(err);
        })

  
})


router.get("/display",auth,async(req,resp)=>{

    const data = await User.find();
    resp.render("display",{"data":data})
})

router.get("/delete",async(req,resp)=>{

        const _id = req.query.did
        const data =  await User.findByIdAndDelete(_id)
        fs.unlinkSync("public/images/"+data.img)
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

        if(data.Tokens.length>=2)
        {
            resp.render("login",{"msg":"Max user limit reached !!!"})
            return;
        }


        const isValid =  await bcrypt.compare(password,data.password)
        if(isValid)
        {
            
            const token = await data.generateToken()
            resp.cookie("jwt",token)
            resp.redirect("display")
        }
        else{
            resp.render("login",{"msg":"Invalid credentials"})
        }


    } catch (error) {
        console.log(error);
        resp.render("login",{"msg":"Invalid credentials"})
    }

})

router.get("/logout",auth,async(req,resp)=>{


        var user  = req.user
        var token = req.token

        // console.log(user);
        // console.log(token);

       user.Tokens =   user.Tokens.filter(ele=>{
            return ele.token !=token
        })

        await user.save()


        resp.clearCookie("jwt")
        resp.render("login")
})

router.get("/logoutall",auth,async(req,resp)=>{


    var user  = req.user
    var token = req.token

    // console.log(user);
    // console.log(token);

   
    await user.save()

    user.Tokens = [];
    user.save()
    resp.clearCookie("jwt")
    resp.render("login")
})

module.exports=router