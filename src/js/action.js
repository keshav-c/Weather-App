import showResults from './display';

const search = async (query) => {
  const key = '11ea28189dba04a840bb2d0952b6a58e';
  const units = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=${units}`;
  await fetch(url, { mode: 'cors' })
    .then(response => response.json())
    .then(data => showResults(data));
};

export default search;
