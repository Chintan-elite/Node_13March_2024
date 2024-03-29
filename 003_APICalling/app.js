const axios = require("axios")


axios.get("https://restcountries.com/v3.1/all").then(result=>{

    const dt = result.data

    for(var i=0;i<dt.length;i++)
    {
        console.log(dt[i].name.common);
    }

}).catch(err=>{
    console.log(err);
})
