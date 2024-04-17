

const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient

const url = "mongodb://localhost:27017";

mongoClient.connect(url).then(data=>{

    
     const database = data.db("student")
    
    //  database.createCollection("info").then(data=>{
    //     console.log("collection created");
    //  }).catch(err=>{
    //     console.log(err);
    //  })

    const d1 = {name:"tops",email:"tops@gmail.com",phone:"9586968574"}
    const d2 = {Name:"test",email:"test@gmail.com",phone:"6385748596"}
    const d3 = {name:"abc",Email:"abc@gmail.com",phone:"4152638574"}

    // database.collection("info").insertOne(d1).then(r=>{
    //     console.log(r);
    // }).catch(err=>{
    //     console.log(err);
    // })

    // database.collection("info").insertMany([d1,d2,d3]).then(r=>{
    //     console.log(r);
    // }).catch(err=>{
    //     console.log(err);
    // })


    // database.collection("info").find().toArray().then(r=>{
    //     console.log(r);
    // }).catch(err=>{
    //     console.log(err);
    // })

    database.collection("info").find({Name:"test"}).toArray().then(r=>{
        console.log(r);
    }).catch(err=>{
        console.log(err);
    })

    // database.collection("info").findOne({name:"tops"}).then(r=>{
    //     console.log(r);
    // }).catch(err=>{
    //     console.log(err);
    // })

    // database.collection("info").updateOne({name:"test"},{$set:{email:"test123@yahoo.com"}}).then(r=>{
    //     console.log(r);
    // }).catch(err=>{
    //     console.log(err);
    // })

    // database.collection("info").deleteOne({name:"test"}).then(r=>{
    //     console.log(r);
    // }).catch(err=>{
    //     console.log(err);
    // })

    // database.collection("info").deleteMany({name:"tops"}).then(r=>{
    //     console.log(r);
    // }).catch(err=>{
    //     console.log(err);
    // })



}).catch(err=>{
    console.log(err);
})

