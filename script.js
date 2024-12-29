const key = "852a96e9086600163452296400aa6897";
const temp = document.querySelector(".degree h1");
const city = document.querySelector(".degree h2");
const humidity = document.querySelector(".hum-text h1");
const wind = document.querySelector(".spee h1");
const img = document.querySelector(".sun img");
const outer = document.querySelector(".outer");
const error = document.querySelector(".error");

// const API =
//   "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

const inputValue = document.querySelector(".head input");
const search = document.querySelector(".head button");
search.addEventListener("click", () => {
  const inputData = inputValue.value;
  const API = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputData}`;

  async function checkWeather() {
    const response = await fetch(API + `&appid=${key}`);
    const data = await response.json();

    if (data.main) {
      const tempature = Math.floor(data.main.temp);
      const speen = data.wind.speed;
      const name = data.name;
      const humidit = data.main.humidity;

      temp.textContent = tempature + "°C";
      city.textContent = name;
      wind.textContent = speen + "km/h";
      humidity.textContent = humidit + "%";

      if (data.weather[0].main === "Clouds") {
        img.src = "/images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        img.src = "/images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        img.src = "/images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        img.src = "/images/Drizzle";
      } else if (data.weather[0].main === "Mist") {
        img.src = "/images/mist.png";
      }
      outer.style.display = "inline";
      error.style.display = "none";
    } else {
      error.style.display = "inline";
      outer.style.display = "none";
    }
  }
  checkWeather();
});
