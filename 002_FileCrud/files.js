const { log } = require('console');
const fs = require('fs')

const addData = (data)=>{

    jsondata = JSON.stringify(data)
    fs.writeFileSync("test.json",jsondata)
    console.log("Data insrted...");
}

const viewData = ()=>{
   const data =  fs.readFileSync("test.json",'utf-8')
   console.log(JSON.parse(data));
}


module.exports={addData,viewData}