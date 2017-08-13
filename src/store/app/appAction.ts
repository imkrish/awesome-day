export const LOADING_LOCATION = 'LOADING_LOCATION'
export const FINISH_LOADING_LOCATION = 'FINISH_LOADING_LOCATION'
export const SET_LOCATION_DATA = 'SET_LOCATION_DATA'

export const LOADING_WEATHER = 'LOADING_WEATHER'
export const FINISH_LOADING_WEATHER = 'FINISH_LOADING_WEATHER'
export const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
export const SET_LAST_WEATHER_UPDATED = 'SET_LAST_WEATHER_UPDATED'

export const LOADING_QUOTE = 'LOADING_QUOTE'
export const FINISH_LOADING_QUOTE = 'FINISH_LOADING_QUOTE'
export const SET_QUOTE = 'SET_QUOTE'

// Location
export const loadingLocation = () => ({
  type: LOADING_LOCATION
})

export const finishLoadingLocation = () => ({
  type: FINISH_LOADING_LOCATION
})

export const setLocationData = (locationData: any) => ({
  type: SET_LOCATION_DATA,
  payload: locationData
})

// Weather
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

// Quote
export const loadingQuote = () => ({
  type: LOADING_QUOTE
})

export const finishLoadingQuote = () => ({
  type: FINISH_LOADING_QUOTE
})

export const setQuote = (quote: string) => ({
  type: SET_QUOTE,
  payload: quote
})