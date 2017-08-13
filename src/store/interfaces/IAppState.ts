export interface IAppState {
  loadingLocation: boolean
  locationData: any
  
  loadingWeather: boolean
  weatherData: any
  lastWeatherUpdated: number | undefined

  loadingQuote: boolean
  quote: string | undefined
}