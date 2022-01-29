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
// Current date acquisition variables
var today = moment().format("MM/DD/YYYY");
var currentweather = document.getElementById("current-weather");
const apikey = "7e0dfeaa5d115777441ab4aec1f884c9";

function getCurrentWeather(paraC) {
  let currentweatherapi = `http://api.openweathermap.org/data/2.5/weather?q=${paraC}&units=imperial&appid=${apikey}`;

  fetch(currentweatherapi)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (response) {
            // For check purpose
            console.log(response);
            // Handler of valid (with response) and new (not repeat) search input
            if (!citynamelist.includes(paraC)) {
              citynamelist.push(paraC);
              localStorage.setItem("Citynamelist", JSON.stringify(citynamelist));
              // Step3-1
              attachhistorybtn();
            }           
            // Show only some index
            currentweather.innerHTML = `
              <h3>City of ${response.name}  ${today} </h3>
              <img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png" class="iconimage">
              Summary: ${response.weather[0].description}<br>
              Temperature: ${response.main.temp} °F <br>
              Humidity: ${response.main.humidity} % <br>
              Wind Speed: ${response.wind.speed} mph <br>`
            // Pass latitude and longitude to forecast board
            latitude = response.coord.lat;
            longitude = response.coord.lon;
            // Step3-2
            showforecast();
          })
        } 
        else { 
          alert('Error: ' + response.statusText); 
        }
      }).catch(function (error) { alert('Invalid function therefore unable to retrieve weather data'); }
    );
}

// Pointer and Function of show forecast card Step 3-2
var forecastcard = document.getElementById("forecastcard");

function showforecast() {
  // guided by https://openweathermap.org/api/one-call-api
  let forecastweatherapi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=Imperial&appid=${apikey}`;

  fetch(forecastweatherapi)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (response) {
          console.log(response, 76);
          document.getElementById("Forecastheader").setAttribute("class", "")
          forecastcard.innerHTML = "";
          // set 6 as a handler of 5 day forecast (starting from tomorrow)
          for (var i = 1 ; i < 6; i++ ) {
            forecastcard.innerHTML += `
              <div class="card col-sm-4 p-4 my-3">
                <h5 class='card-title'>${moment(response.daily[i].dt, "X").format("MM/DD/YYYY")}</h5>
                <img src="https://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png" class="iconimage">
                <div class="justify-between">
                  Temp (day to eve): ${response.daily[i].temp.day} ~ ${response.daily[i].temp.eve}°F <br>
                  Humidity:  ${response.daily[i].humidity} % <br>
                  Wind Speed:  ${response.daily[i].wind_speed} mph </div>
              </div> `
          }
            // Add uv index
            uvappend(response);
                        
            // Uv index attach function
            function uvappend(paraD) {
              let uvline = document.createElement("span");
              uvline.textContent = "Uv:";
              
              let uvindex = document.createElement("span");
              uvindex.textContent = paraD.current.uvi;
              // criteria base from https://www.cancer.org.au/blog/health-check-what-does-the-uv-index-mean
              if (paraD.current.uvi<5) {
                uvindex.setAttribute("class", "m-1 btn d-inline-block bg-success text-white")
              } else if (paraD.current.uvi<8) {
                uvindex.setAttribute("class", "m-1 btn d-inline-block bg-warning text-white")
              } else {
                uvluvindexine.setAttribute("class", "btn d-inline-block bg-danger text-white")
              }
              currentweather.appendChild(uvline);
              uvline.appendChild(uvindex);
            }
        })
      } 
    });
}

// Append button to the history of each cityname input
var searchhistory = document.getElementById("searchhistory");

function attachhistorybtn() {
  let searchhistorybtn = document.createElement("button");
  searchhistorybtn.textContent = cityname;
  searchhistorybtn.setAttribute("class", "list-group-item list-group-item-action text-center");
  searchhistory.appendChild(searchhistorybtn);
  searchhistorybtn.addEventListener("click", function(){
    historycity = this.textContent;
    getCurrentWeather(historycity);
  })
}