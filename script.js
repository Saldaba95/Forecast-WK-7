function searchCity(city) {
  let apiKey = "d44bo97ccfe0cbf0e78f5498fb0fa93t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric"`;
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city-input");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form-engine");
searchFormElement.addEventListener("submit", handleSearchSubmit);
