async function getData() {
  try {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=f9ffe28bafb14ba0b4394732250506&q=${lat},${lon}&aqi=no`
        );

        const data = await response.json();

        document.getElementById("Locations").innerHTML =
          data.location.name + ", " + data.location.country;

        document.getElementById("Time").innerHTML =
          data.location.localtime.split(" ")[1];

        document.getElementById("Temperature").innerHTML =
          data.current.temp_c + "°C";

        document.getElementById("Conditions").innerHTML =
          data.current.condition.text;

        document.getElementById("Wind").innerHTML =
          data.current.wind_kph + " km/h";

        document.getElementById("Humidity").innerHTML =
          data.current.humidity + "%";

        document.getElementById("Sun").innerHTML =
          (data.current.uv / 10).toFixed(1) + " h";

        document.getElementById("weatherIcon").src =
          "https:" + data.current.condition.icon;

        document.getElementById("weatherIcon").alt =
          data.current.condition.text;
      },
      (error) => {
        console.error("Location access denied:", error);

        document.getElementById("Locations").innerHTML =
          "Location access denied";
      }
    );
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

getData();