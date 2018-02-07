const API_KEY = '815025e25ae254eeb4185dc303aec42d';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
