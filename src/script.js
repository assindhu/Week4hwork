function formatDate (date){

  
let hours = date.getHours();

if (hours < 10){
hours = `0${hours}`;

}
let minutes = date.getMinutes();

if (minutes < 10){
minutes = `0${minutes}`;

}


let daysIndex = date.getDay();
let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = days[daysIndex];
    return `${day} ${hours} : ${minutes}`;
}




function search (event){
event.preventDefault ();

let cityElemet = document.querySelector("#cityname");
let cityInput = document.querySelector ("#city-input");

 cityElemet.innerHTML = cityInput.value;

}

function convertToFahrenheit(event){
event.preventDefault();

let tempElement = document.querySelector("#temperature");
tempElement.innerHTML = 66;

}

function convertToCelsius (event){
event.preventDefault();
let tempElement = document.querySelector("#temperature");
tempElement.innerHTML = 19;


}
//feature 1

  let timeElement = document.querySelector("#time");
let currentTime = new Date ();

timeElement.innerHTML = formatDate (currentTime);

//feature 2
let searchForm = document.querySelector ("#search-form");
searchForm.addEventListener ("submit",search);


//feature 3


let fahrenheitElement = document.querySelector("#Fahrenheitlink");
fahrenheitElement.addEventListener("click",convertToFahrenheit);


let celsiusElement = document.querySelector("#Celsiuslink");
celsiusElement.addEventListener ("click",convertToCelsius);