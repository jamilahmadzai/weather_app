const key = "qGhiqr0TBjmheBDM8DeRl0OG9dl7f2sE";
const city = document.querySelector("city");

//Weather Information
const getWeather = async id => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

//City Informtion
const getCity = async city => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// getCity("kabul")
//   .then(data => {
//     return getWeather(data.Key);
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
