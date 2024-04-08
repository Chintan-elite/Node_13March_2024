const axios = require("axios")


const geocodedata = (city,callback)=>{

axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2260aa7118184cc18eab9d4f006c4ab1`).then(result=>{
    const dt = result.data.results[0].geometry;

    var lat = dt.lat
    var lng = dt.lng
   
    callback({lat:lat,lng:lng})
    // console.log(`
    
    // LAT : ${lat}
    // LNG : ${lng}

    // `);

}).catch(err=>{
    callback(undefined,err)
})


}

module.exports={geocodedata}