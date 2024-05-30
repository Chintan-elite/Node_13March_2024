const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    catid :{
        type : mongoose.Schema.Types.ObjectId
    },
    pname  :{
        type : String
    },
    price : {
        type : Number
    },
    qty : {
        type : Number
    },
    image : {
        type : String
    }
})