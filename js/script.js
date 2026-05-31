async function getData() {
    var response = await fetch('http://api.weatherapi.com/v1/current.json?key=f9ffe28bafb14ba0b4394732250506&q=Chandigarh&aqi=no').then(response => {
         console.log(response.status)
         return response.json();

    })
    .then(data => {
      console.log(data.location);

      var location=document.getElementById("Locations")
      document.getElementById("Locations").innerHTML = data.location.region + ", " + data.location.country;

      var time=document.getElementById("Time")
      document.getElementById("Time").innerHTML = data.location.localtime.split(" ")[1];

      var location=document.getElementById("Temperature")
      document.getElementById("Temperature").innerHTML =data.current.temp_c + "°C";
  
      var location=document.getElementById("Conditions")
      document.getElementById("Conditions").innerHTML =data.current.condition.text;

      var location=document.getElementById("Wind")
      document.getElementById("Wind").innerHTML =data.current.wind_kph + " km/h";

      var location=document.getElementById("Humidity")
      document.getElementById("Humidity").innerHTML =data.current.humidity + "%";

      var location=document.getElementById("Sun")
      document.getElementById("Sun").innerHTML =(data.current.uv / 10).toFixed(1) + " h";

      const weatherIcon = document.getElementById("weatherIcon");
      weatherIcon.src = data.current.condition.icon;
      weatherIcon.alt = data.current.condition.text;
    })
    .catch(error => {
      console.error("Failed to fetch weather data:", error);
    });
}

getData();
