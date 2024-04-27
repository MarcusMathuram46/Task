let place = document.querySelector(".input");
let DisplayWeather = document.querySelector(".DisplayWeather");
let details = document.querySelector(".details");

DisplayWeather.addEventListener("click", (event) => {
  event.preventDefault();
  //to prevent form default

  const cityName = place.value;
  const apiKey = "52cec576c37b154af74cc701da1bd04d";
  //api key for fetching data

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    // for convert to object

    .then((data) => {
      details.innerHTML = "";
      const temperature = data.main.temp;
      let weatherDescription = data.weather[0].main;

      let temp = document.createElement("p");
      temp.innerHTML = `<b>Temperature: ${temperature}℃</b><br><b>☁️${weatherDescription}</b>`;
      details.appendChild(temp);
    })
    .catch((error) => {
      console.log("Enter correct city name", error);
    });
});
