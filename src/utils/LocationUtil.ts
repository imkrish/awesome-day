import { fromPromise } from 'rxjs/observable/fromPromise'
import { empty } from 'rxjs/observable/empty'
import { ILocation } from '../interfaces/ILocation'
import { ajax } from 'rxjs/observable/dom/ajax'

export class LocationUtil {
  static getLocationUrl = (location: ILocation) => {
    const { lat, lng } = location
    return (
      `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true`
    )
  }
  static getPositionPromise = () => {
    const { geolocation } = navigator
    return new Promise(
      (resolve, reject) => {
        geolocation.getCurrentPosition(resolve, reject)
      }
    )
  }

  static getCurrentLocation$ = () => {
    const { geolocation } = navigator
    if (!geolocation) {
      return empty()
    }
    return fromPromise(LocationUtil.getPositionPromise())
  }
  
  static getLocationData$ = (location: ILocation) => {
    return ajax({
      url: LocationUtil.getLocationUrl(location),
      crossDomain: true
    })
  }
}