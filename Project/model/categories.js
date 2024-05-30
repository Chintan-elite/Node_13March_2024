const mongoose = require("mongoose")

const CategorySchema = new mongoose.model(
    {
        catname : {
            type : String
        }
    }
)

module.exports=new mongoose.model("Category",CategorySchema)