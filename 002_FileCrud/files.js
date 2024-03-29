const { log } = require('console');
const fs = require('fs')

const addData = (data)=>{

    alldata = loaddata()
    
    duplicate =  alldata.find(ele=>{
      return  ele.name == data.name
    })

    if(duplicate)
    {
        console.log("Name exist!!!");
        return;
    }



    alldata.push(data)
   
    const dt =  JSON.stringify(alldata)
    
    fs.writeFileSync("test.json",dt)
    console.log("Data insrted...");
}

const viewData = ()=>{
    const alldata = loaddata()
    console.log(alldata);
}

const loaddata = ()=>{
   
    
    try {
        const data =  fs.readFileSync("test.json",'utf-8')
        
        return JSON.parse(data)

    } catch (error) {
        return [];
    }
}

const deleteData = (name)=>{

        alldata = loaddata()

        newdata =  alldata.filter(ele=>{
            return ele.name != name
        })

        const dt =  JSON.stringify(newdata)
    
         fs.writeFileSync("test.json",dt)
         console.log("Data deleted...");

}

const updateData = (data)=>{

    alldata = loaddata()
    
    dt = alldata.find(ele=>{
        return ele.name==data.name
    })

    if(dt)
    {

        newdata = alldata.filter(ele=>{
            return ele.name != data.name
        })
        newdata.push(data)

        const dt =  JSON.stringify(newdata)
    
         fs.writeFileSync("test.json",dt)
         console.log("Data update...");

    }
    else{
        console.log("data not available");
        return;
    }

}



module.exports={addData,viewData,deleteData,updateData}