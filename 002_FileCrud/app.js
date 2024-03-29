

// a= process.argv[2]
// b = process.argv[3]
// console.log(a);
// console.log(b);
// console.log(process.argv[0]);
// console.log(process.argv[1]);


const yargs = require("yargs")
const files = require("./files")

yargs.command({
    command:"add",
    builder : {
        name:{
            type:String
        },
        email:{
            type : String
        },
        phone:{
            type:Number
        }
    },
    handler : function(argv)
    {
       data = {
        name : argv.name,
        email : argv.email,
        phone : argv.phone
       }
        files.addData(data)
    }
})


yargs.command({
    command:"view",
    handler: function(argv)
    {
      files.viewData()
    }
})

yargs.command({
    command:"delete",
    builder:{
        name:{
            type:String
        }
    },
    handler : function(argv)
    {
        files.deleteData(argv.name)
    }
})


yargs.command({
    command:"update",
    builder : {
        name:{
            type:String
        },
        email:{
            type : String
        },
        phone:{
            type:Number
        }
    },
    handler : function(argv)
    {
       data = {
        name : argv.name,
        email : argv.email,
        phone : argv.phone
       }
        files.updateData(data)
    }
})



yargs.argv