const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const detail = document.querySelector(".detail");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = async (data) => {
  // const cityDetails = data.cityDetails;
  // const cityWeather = data.cityWeather;

  //DESTRUCTURING
  const { cityDetails, cityWeather } = data;

  //
  detail.innerHTML = ` <h5 class="my-3">${cityDetails.EnglishName}</h5>
  <div class="my-3">${cityWeather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${cityWeather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;

  const iconSrc = `img/icons/${cityWeather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = cityWeather.IsDayTime ? `img/day.svg` : `img/night.svg`;
  time.setAttribute("src", timeSrc);

  // let timeSrc = null;
  // if (cityWeather.IsDayTime) {
  //   timeSrc = `img/day.svg`;
  // } else {
  //   timeSrc = `img/night.svg`;
  // }
  // time.setAttribute("src", timeSrc);

  //remove display
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);

  return { cityDetails, cityWeather };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));

  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
