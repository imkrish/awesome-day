import { Hello } from '../components/Hello'
import { connect } from 'react-redux'
import { IRootState } from '../store/interfaces/IRootState'
import { fetchLocationData, fetchWeatherData } from '../store/app/appEpic'

export const HelloContainer = connect(
  (state: IRootState) => ({
    loadingLocation: state.app.loadingLocation,
    locationData: state.app.locationData,
    loadingWeather: state.app.loadingWeather,
    weatherData: state.app.weatherData,
    lastWeatherUpdated: state.app.lastWeatherUpdated
  }),
  {
    fetchLocationData, fetchWeatherData
  }
)(Hello)