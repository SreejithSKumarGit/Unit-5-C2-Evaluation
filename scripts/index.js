document.getElementById("searchBtn").addEventListener('click',getData)
async function getData()
{
    try {
        let cityName=document.getElementById("searchValue").value;
        let APIkey="47b3c525b0ee261bfa240cf130a75cee"
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
        let res=await fetch(url);
        let data=await res.json();
        
        displayData(data);
    } 
    catch (error) {
        console.log("Error :" + error);
    }

}
function displayData(data)
{
       // const  ={ 
       // main:{temp,pressure,humidity},
       // wind:{speed},
      //  sys:{sunrise,sunset},
       // weather:{description},
        //name,
       // }
    document.getElementById("cityName").innerHTML="";
    let cityName=document.createElement('h2');
    cityName.textContent=data.name;
    document.getElementById("cityName").append(cityName);
    //if(data.weather[0].description=="clear sky")
    //{
    //    let weatherImg=document.createElement('img');
    //    weatherImg.src="https://cdn-icons.flaticon.com/png/512/1959/premium/1959325.png?token=exp=1651507418~hmac=bf4317ae872bfb3796bb45f11cf21e5e";
    //}
    //else{
    //    let weatherImg=document.createElement('img');
    //    weatherImg.src="https://cdn-icons-png.flaticon.com/512/414/414927.png";
   // }
    //document.getElementById("weatherImg").append(weatherImg);
    document.getElementById("container").innerHTML="";  
    let weatherImg=document.createElement('img');
    weatherImg.src="https://cdn-icons-png.flaticon.com/512/414/414927.png";
    let weatherCard=document.createElement('div');
    let temp=document.createElement('h3');
    temp.textContent="Temperature: " + data.main.temp + " Celsius";
    let pressure=document.createElement('h3');
    pressure.textContent="Pressure : "+ data.main.pressure +" Pascal";
    let humidity=document.createElement('h3');
    humidity.textContent="Humidity : "+ data.main.humidity +" g/Kg"; 
    let windSpeed=document.createElement('h3');
    windSpeed.textContent="Wind: "+ data.wind.speed +" m/s";
    let sunrise=document.createElement('h3');
    sunrise.textContent="Sunrise: "+ data.sys.sunrise ;
    let sunset=document.createElement('h3');
    sunset.textContent="Sunset: "+ data.sys.sunset ;
    let weatherDesc=document.createElement('h3');
    weatherDesc.textContent="Weather Description: "+ data.weather[0].description ;
    weatherCard.append(weatherImg,temp,pressure,humidity,windSpeed,sunrise,sunset,weatherDesc);
    document.getElementById("container").append(weatherCard);
    document.getElementById("main_container").style.backgroundColor='rgb(76, 151, 236)';


    
}