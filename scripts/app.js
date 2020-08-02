const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateWeather = data => {
  //Simple Way
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  //Destructuring
  const { cityDets, weather } = data;
  console.log(weather);

  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;

  //Setting icon and images

  let iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconsrc);

  let day_night = "";
  if (weather.IsDayTime) {
    day_night = "img/day.svg";
  } else {
    day_night = "img/night.svg";
  }

  time.setAttribute("src", day_night);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async city => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets: cityDets,
    weather: weather
  };
};

cityForm.addEventListener("submit", e => {
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();
  updateCity(city)
    .then(data => {
      updateWeather(data);
    })
    .catch(err => {
      console.log(err);
    });
});
