# 06 Server-Side APIs: Weather Dashboard

### Link

[Open html page](https://hongnodie.github.io/Weather-Dashboard/)

[See coding files](https://github.com/Hongnodie/Weather-Dashboard.git)

### Aim

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. This application (app) is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

### Resources

[OpenWeather One Call API](https://openweathermap.org/api/one-call-api) -- retrieve weather data for cities. 

[Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys) API key instruction.

[Icons available here](https://fontawesome.com/v5.15/icons?d=gallery&p=2)

### User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

### Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

### Key features

Sidebar that store search history as an array  
City name and search history be saved to the local storage  
Repeated or invalid serach input will not be put into search history  
Well tracked coding structure  


### Screenshot

The weather app screenshot

![The weather app screenshot](./assets/images/screenshot.png)

Responsive design

![The weather app responsive design](./assets/images/responsivedesign.png)

Demo

![The weather app demo](./assets/images/demo.png)