import getDateString from './util';

const clearResults = () => {
  const resultsDiv = document.getElementById('search-results');
  resultsDiv.innerHTML = '';
  return resultsDiv;
};

const showLoading = () => {
  const resultsDiv = clearResults();
  const message = document.createElement('p');
  message.textContent = 'Loading...';
  resultsDiv.appendChild(message);
};

const showResults = (data) => {
  const results = clearResults();

  const location = document.createElement('div');
  location.className = 'location';
  location.innerHTML = `
    <span class="loc-name">${data.name}</span>
    <span class="report-time">${getDateString(data.dt, data.timezone)}</span>
  `;

  const weather = document.createElement('div');
  const weatherIconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weather.innerHTML = `
    <figure>
      <img src=${weatherIconURL} alt="Weather Icon">
      <figcaption class="description">${data.weather[0].description}</figcaption>
    </figure>
  `;

  const tempDiv = document.createElement('div');
  tempDiv.className = 'temperature-section';

  const currentTemp = document.createElement('div');
  currentTemp.className = 'current-temp';
  currentTemp.innerHTML = `
    <span class="current-val temperature">${data.main.temp}</span>
    <span class="unit-temperature">&deg;C</span>
  `;
  const feelsLike = document.createElement('div');
  feelsLike.className = 'feels-like';
  feelsLike.innerHTML = `
    <span class="feels-like-text">Feels like</span>
    <span class="feels-like-val temperature">${data.main.feels_like}</span>
    <span class="unit-temperature">&deg;C</span>
  `;
  const tempRange = document.createElement('div');
  tempRange.className = 'temp-range';
  tempRange.innerHTML = `
    <span class="min-temp temperature">${data.main.temp_min}</span>
    <span class="unit-temperature">&deg;C</span>
    <span>&sol;</span>
    <span class="max-temp temperature">${data.main.temp_max}</span>
    <span class="unit-temperature">&deg;C</span>
  `;
  tempDiv.appendChild(currentTemp);
  tempDiv.appendChild(feelsLike);
  tempDiv.appendChild(tempRange);

  results.appendChild(location);
  const mainInfo = document.createElement('div');
  mainInfo.className = 'main';
  mainInfo.appendChild(weather);
  mainInfo.appendChild(tempDiv);
  results.appendChild(mainInfo);

  const pressure = document.createElement('div');
  pressure.innerHTML = `
    <span class="pressure-label">Pressure</span>
    <span class="pressure-val">${data.main.pressure}hPa</span>
  `;
  results.appendChild(pressure);

  const humidity = document.createElement('div');
  humidity.innerHTML = `
    <span class="humidity-label">Humidity</span>
    <span class="humidity-val">${data.main.humidity}&percnt;</span>
  `;
  results.appendChild(humidity);

  if (data.visibility) {
    const visibility = document.createElement('div');
    visibility.innerHTML = `
      <span class="visibility-label">Visibility</span>
      <span class="visibility-val distance">${data.visibility}</span>
      <span class="unit-distance">meters</span>
    `;
    results.appendChild(visibility);
  }

  if (data.wind) {
    const wind = document.createElement('div');
    wind.innerHTML = `
      <span class="wind-label">Wind Speed</span>
      <span class="wind-val speed">${data.wind.speed}</span>
      <span class="unit-speed">meters&sol;sec</span>
      <span class="wind-label">In</span>
      <span>${data.wind.deg}&deg;</span>
    `;
    results.appendChild(wind);
  }

  if (data.clouds) {
    const cloudiness = document.createElement('div');
    cloudiness.innerHTML = `
      <span class="cloudiness-label">Cloudiness</span>
      <span class="cloudiness-val">${data.clouds.all}&percnt;</span>
    `;
    results.appendChild(cloudiness);
  }

  if (data.rain) {
    const rain = document.createElement('div');
    rain.innerHTML = `
      <span class="rain-label">Rain (last 1 hour)</span>
      <span class="rain-val">${data.rain['1h']}mm</span>
      <span class="rain-label">Rain (last 3 hours)</span>
      <span class="rain-val">${data.rain['3h']}mm</span>
    `;
    results.appendChild(rain);
  }

  if (data.snow) {
    const snow = document.createElement('div');
    snow.innerHTML = `
      <span class="snow-label">Snow (last 1 hour)</span>
      <span class="snow-val">${data.snow['1h']}mm</span>
      <span class="snow-label">Snow (last 3 hours)</span>
      <span class="snow-val">${data.snow['3h']}mm</span>
    `;
    results.appendChild(snow);
  }


  const jsonData = document.createElement('pre');
  jsonData.className = 'debug-info';
  jsonData.innerHTML = JSON.stringify(data, undefined, 2);
  results.appendChild(jsonData);
};

export { showResults as default, showLoading };