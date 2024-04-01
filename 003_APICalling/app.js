const geocode = require("./geocode")
const weather = require("./weather")


const city = process.argv[2]
if(!city)
{
    console.log("City name required");
    return
}

geocode.geocodedata(city,(data,err)=>{

    if(err)
        console.log(err);
       
    
    weather.weatherdata(data.lat,data.lng,(result,err)=>{

        console.log(`
        
        City = ${result.city}
        Lat = ${data.lat}
        Lng = ${data.lng}
        Temp = ${result.temp}
        Pressure = ${result.pressure}
        Humidity = ${result.humidity}
        
        `);
    })


})