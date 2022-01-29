// Search button to local storage
var searchbtn = document.querySelector(".searchbtn");
var citynameinput = document.getElementById("cityname");
var citynamelist =[];

var cityname;
let latitude;
let longitude;

// Add search button that save city nanme to local storage as Step1
searchbtn.addEventListener("click", function(event){
  event.preventDefault();
  cityname = citynameinput.value;
  localStorage.setItem("City", JSON.stringify(cityname));
  getCurrentWeather(cityname);
});

// Then successful display of current weather Step2 triggers: 1-Search history button (Step3-1) and 2-future weather forecast card (Step3-2)
function getCurrentWeather(paraC) {

}

// Pointer and Function of show forecast card Step 3-2
function showforecast() {

}

// Append button to the history of each cityname input
function attachhistorybtn() {

}