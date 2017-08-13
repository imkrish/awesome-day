import * as React from 'react'
import { CurrentLocation } from './CurrentLocation'
import { CurrentWeather } from './CurrentWeather'
import { ILocation } from '../interfaces/ILocation'

interface IHelloProps {
  // State
  loadingLocation: boolean
  locationData: any
  loadingWeather: boolean
  weatherData: any
  lastWeatherUpdated: number

  // Action
  fetchLocationData: () => void
  fetchWeatherData: (location: ILocation) => void
}

export class Hello extends React.Component<IHelloProps, {}> {

  dateTimeP: HTMLParagraphElement

  componentWillMount() {
    const { fetchLocationData } = this.props
    // After getting the location result, 
    // Fetch location data will call fetch weather data. (appEpic.ts)
    fetchLocationData()
  }

  onRefreshWeatherData = () => {
    const { locationData, fetchWeatherData } = this.props
    fetchWeatherData(locationData.geometry.location)
  }

  render() {
    const { loadingLocation, locationData, weatherData, loadingWeather, lastWeatherUpdated } = this.props
    return (
      <div>
        {/* Current Location */}
        <div style={{ marginTop: 40 }}>
          <CurrentLocation
            loadingLocation={loadingLocation}
            locationData={locationData}
          /> 
        </div>
        
        {/* Current Weather */}
        <div style={{ marginTop: 30 }}>
          <CurrentWeather
            loadingWeather={loadingWeather}
            weatherData={weatherData}
            lastWeatherUpdated={lastWeatherUpdated}
            locationData={locationData}
            onRefreshWeatherData={this.onRefreshWeatherData}
          />
        </div>
      </div>
    )
  }
}