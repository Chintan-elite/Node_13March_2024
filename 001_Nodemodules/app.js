
// const os = require('os')

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.totalmem()/1024/1024/1024)

//  const fs  =require('fs')

// fs.writeFileSync('test.txt','Hello..this is my first node program')

// fs.appendFileSync("test.txt","  Hii..i am adding another content in this file")

// const data =  fs.readFileSync("test.txt",'utf-8')
// // console.log(data.toString());
// console.log(data);

// fs.unlinkSync("test.txt")

const myfile = require('./myfile')

myfile.msg()
myfile.add(10,20)
myfile.add(50,60)

console.log("Hello");
console.log("Hello nodemon");

myfile.add(20,30)