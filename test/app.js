const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const setPass = async (pass)=>{

  const n_pass =   await bcrypt.hash(pass,10)
    //console.log(n_pass);
   const isValid =   await bcrypt.compare("hello",n_pass)
    console.log(isValid);
}


const getToken = async ()=>{

    const token =  await jwt.sign({_id:1},"thisismysecretkeyfortoken")
    console.log(token);
}


getToken()
// setPass("hello")