

const msg  = ()=>{
    console.log("hello , i am calling own module function");
}

const add = (a,b)=>{
   // console.log("Addition of "+a+" and "+b+" is "+(a+b));
   console.log(`addition of ${a} and ${b} is ${a+b}`);
}

module.exports={msg,add}