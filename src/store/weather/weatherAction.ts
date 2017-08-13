export const LOADING_WEATHER = 'LOADING_WEATHER'
export const FINISH_LOADING_WEATHER = 'FINISH_LOADING_WEATHER'
export const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
export const SET_LAST_WEATHER_UPDATED = 'SET_LAST_WEATHER_UPDATED'

export const loadingWeather = () => ({
  type: LOADING_WEATHER
})

export const finishLoadingWeather = () => ({
  type: FINISH_LOADING_WEATHER
})

export const setWeatherDate = (weatherData: any) => ({
  type: SET_WEATHER_DATA,
  payload: weatherData
})

export const setLastWeatherUpdated = (timestamp: number) => ({
  type: SET_LAST_WEATHER_UPDATED,
  payload: timestamp
})