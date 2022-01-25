// Search button to local storage
var searchbtn = document.querySelector(".searchbtn");
var citynameinput = document.getElementById("cityname");
var citynamelist =[];

function searchtostore() {
  // json.stringnify(
  var cityname = citynameinput.textContent;
  citynamelist.push(cityname);
  localStorage.setItem("City", cityname);
  getCurrentWeather();
}

searchbtn.addEventListener("click", searchtostore());


var baseurl = "http://api.openweathermap.org/data/2.5/";

// get api function
var city = document.querySelector(".city");
var date = document.querySelector(".date");
var describe = document.querySelector(".describe");
var temp = document.querySelector(".temp");
var hum = document.querySelector(".hum");
var wind = document.querySelector(".wind");
var uv = document.querySelector(".uv");
// Current date acquire
var today = moment().format("MM/DD/YYYY");

function getCurrentWeather() {
  const apikey = "7e0dfeaa5d115777441ab4aec1f884c9";
  var currentcityname = localStorage.getItem("City");
  var currentweatherapi = baseurl + "weather?q=" + currentcityname + "&units=imperial&appid=" + apikey;

  var citycontent = fetch(currentweatherapi)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (response) {
            console.log(response);
            city.textContent(response.name, today);
            city.appendChild(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
            date.appendChild(today);
            describe.textContent("Summary: " + response.weather[0].description);
            temp.textContent("Temperature: " + response.main.temp + " °F");
            hum.textContent("Humidity: " + response.main.humidity + "%");
            wind.textContent("Wind Speed: " + response.wind.speed + " mph");
            uvInfo();
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Invalid city name therefore unable to retrieve weather data');
      }
    );


}