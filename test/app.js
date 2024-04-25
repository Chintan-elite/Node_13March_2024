const bcrypt = require("bcryptjs")

const setPass = async (pass)=>{

  const n_pass =   await bcrypt.hash(pass,10)
    //console.log(n_pass);
   const isValid =   await bcrypt.compare("hello",n_pass)
    console.log(isValid);
}



setPass("hello")