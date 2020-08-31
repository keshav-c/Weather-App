const search = async (query) => {
  const key = '11ea28189dba04a840bb2d0952b6a58e';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`;
  const response = await fetch(url, {
    mode: 'cors',
    // credentials: 'same-origin',
  })
    .then(response => response.json());
  console.log(response);
  return response;
};

export default search;
