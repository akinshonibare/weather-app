import axios from 'axios';

const API_KEY = 'dd15c59e4bc9deebe39ab181eb2f9d76';
const WEATHER_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// const COUNTRY_CODE_URL = `https://restcountries.eu/rest/v2/name/`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},CA`;

  const request = axios.get(url);

  console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
