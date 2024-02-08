function refreashForecast(response) {
  let temperatureElement = document.querySelector("#city-current-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-input");
  let weatherElement = document.querySelector("#weather-condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#weather-image");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  weatherElement.innerHTML = response.data.condition.description;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="emoji"/>`;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes} `;
}
function searchCity(city) {
  let apiKey = "d44bo97ccfe0cbf0e78f5498fb0fa93t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreashForecast);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form-engine");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Tokyo");
