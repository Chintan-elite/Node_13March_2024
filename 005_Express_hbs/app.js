const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")
const hbs = require("hbs")
const geocode = require("./utill/geocode")
const weather = require("./utill/weather")

const viewpath = path.join(__dirname,"templates/views")
const partialpath = path.join(__dirname,"templates/partials")
const publicpath = path.join(__dirname,"public")


app.use(express.static(publicpath))
app.set("view engine","hbs")
app.set("views",viewpath)
hbs.registerPartials(partialpath)


app.get("/",(req,resp)=>{
    resp.render("index")
})

app.get("/home",(req,resp)=>{
    resp.render("home",{"name":"Shradhdha"})
})

app.get("/about",(req,resp)=>{
    resp.render("about")
})

app.get("/contact",(req,resp)=>{
    resp.render("contact")
})

app.get("/weather",(req,resp)=>{

    const location = req.query.city
    geocode.geocodedata(location,(data,err)=>{

        if(err)
            console.log(err);
           
        
        weather.weatherdata(data.lat,data.lng,(result,err)=>{
    
            resp.send({
            
            "City" : result.city,
            "Lat" : data.lat,
            "Lng":data.lng,
            "Temp" : result.temp,
            "Pressure" : result.pressure,
            "Humidity" : result.humidity
            
             });
        })
    
    
    })




})


app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})