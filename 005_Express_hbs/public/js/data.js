// alert("Hello")

const weatherdata = ()=>{

    const city = document.getElementById("city").value

    
    fetch(`weather?city=${city}`).then(data=>{
        return data.json()
    }).then(result=>{
       

        mycity.innerHTML = result.City
        mylat.innerHTML=result.Lat
        mylng.innerHTML = result.Lng 
        mytemp.innerHTML =result.Temp
        myhumidity.innerHTML =result.Humidity 
        mypressure.innerHTML = result.Pressure



    }).catch(err=>{
        console.log(err);
    })


}