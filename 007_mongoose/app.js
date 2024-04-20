const mongoose = require("mongoose")


const url = "mongodb://localhost:27017/student";

mongoose.connect(url).then(data=>{

    console.log("db connected");
}).catch(err=>{
 console.log(err);
})

const personalSchema = new mongoose.Schema({

        name : {
            type : String
        },
        email : {
            type : String,
            unique : true
        },
        age : {
            type : Number
        }
})

const Personal  = new mongoose.model("Personal",personalSchema)





const addData = ()=>{

    dt1 = {name:"test",email:"tech@gmail.com",age:25}
    const per = new Personal(dt1)
    per.save().then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })

}


const addManydata = ()=>{

    const d1 = {name:"tops",email:"tops11@gmail.com",age:10}
    const d2 = {name:"test",email:"test11@gmail.com",age:25}
    const d3 = {name:"abc",email:"abc11@gmail.com",age:20}

    Personal.insertMany([new Personal(d1),new Personal(d2),new Personal(d3)]).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })

}

const viewData = ()=>{

    Personal.find().then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })

}


// addData()
// addManydata()
viewData()