let weather={
    "apikey":"155ef3a6ab4468e44a991b36150b07fa",
 fetchWeather:function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
             + city

             + "&units=metric&appid="
             +this.apikey
        ).then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        console.log(data);
const {name}=data;
const description=data.weather[0].description;
const icon=data.weather[0].icon;
const humidty=data.main['humidity'];
const temp=data.main["temp"];
const speed=data.wind.speed;
console.log(name,icon,description,temp,humidty,speed)
document.querySelector(".city").innerHTML="Weather in "+name;
document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
document.querySelector(".description").innerHTML=description;
document.querySelector(".temp").innerHTML=temp+"°C"
document.querySelector(".wind").innerHTML="Wind Speed "+speed+"km/h";
document.querySelector(".humidty").innerHTML="Humidity: "+humidty+"%"
document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+")"

    },
    search:function(){
        this.fetchWeather(document.querySelector(".search_bar").value);

    }
};
document.querySelector(".search_button").addEventListener('click',function(){
weather.search();
});
document.querySelector('.search_bar').addEventListener('keyup',function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})