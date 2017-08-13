import { Hello } from '../components/Hello'
import { connect } from 'react-redux'
import { IRootState } from '../store/interfaces/IRootState'
import { fetchLocationData } from '../store/location/locationEpic'
import { fetchWeatherData } from '../store/weather/weatherEpic'

export const HelloContainer = connect(
  (state: IRootState) => ({
    loadingLocation: state.location.loadingLocation,
    locationData: state.location.locationData,
    loadingWeather: state.weather.loadingWeather,
    weatherData: state.weather.weatherData,
    lastWeatherUpdated: state.weather.lastWeatherUpdated
  }),
  {
    fetchLocationData, fetchWeatherData
  }
)(Hello)