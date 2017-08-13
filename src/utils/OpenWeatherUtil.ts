import { ILocation } from '../interfaces/ILocation'
import { ajax } from 'rxjs/observable/dom/ajax'

const OPEN_WEATHER_API_KEY = '7c47d2e02fe0dcbd4b53b65da735fab9'

export class OpenWeatherUtil {
  static getWeatherUrl = (location: ILocation) => {
    const { lat, lng } = location
    return (
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=${OPEN_WEATHER_API_KEY}`
    )
  }

  static getWeatherData$ = (location: ILocation) => {
    return ajax({
      url: OpenWeatherUtil.getWeatherUrl(location),
      crossDomain: true
    })
  }
}