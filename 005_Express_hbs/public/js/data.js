// alert("Hello")

var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");
    
    var requestOptions = {
       method: 'GET',
       headers: headers,
       redirect: 'follow'
    };
    

const getAllCountries = ()=>{
 
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.json())
    .then(result=>{

        var options = "";
        for(var i=0;i<result.length;i++)
        {
            options = options+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
        }
        country.innerHTML=options

    })
    .catch(error => console.log('error', error));
}

var countrycode
const getallState = (ccode)=>{

    countrycode = ccode
    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions)
    .then(response => response.json())
    .then(result=>{

        var options = "";
        for(var i=0;i<result.length;i++)
        {
            options = options+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
        }
        state.innerHTML=options

    })
    .catch(error => console.log('error', error));
}

var statecode
const getallcity = (scode)=>{

    statecode = scode
    fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions)
    .then(response => response.json())
    .then(result=>{

        var options = "";
        for(var i=0;i<result.length;i++)
        {   
          
            options = options+"<option value="+result[i].name+">"+result[i].name+"</option>"
        }
        city.innerHTML=options

    })
    .catch(error => console.log('error', error));
}
    




const weatherdata = (cityname)=>{

    var location = cityname+","+statecode+","+countrycode
    
    
    fetch(`weather?city=${location}`).then(data=>{
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