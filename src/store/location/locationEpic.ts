import { ActionsObservable } from 'redux-observable'
import { Store } from 'redux'
import { IRootState } from '../interfaces/IRootState'
import { merge } from 'rxjs/observable/merge'
import { loadingLocation, setLocationData, finishLoadingLocation } from './locationAction'
import { loadingWeather, finishLoadingWeather } from '../weather/weatherAction'
import { of } from 'rxjs/observable/of'
import { LocationUtil } from '../../utils/LocationUtil'
import { ILocation } from '../../interfaces/ILocation'
import { fetchWeatherData } from '../weather/weatherEpic'

export const FETCH_LOCATION_DATA = '[EPIC] - FETCH_LOCATION_DATA'

export const fetchLocationData = () => ({
  type: FETCH_LOCATION_DATA
})

export const locationEpic = (action$: ActionsObservable<any>, state: Store<IRootState>) => {
  return action$.ofType(FETCH_LOCATION_DATA)
      .switchMap(() => {
        return merge(
          of(loadingLocation()),
          of(loadingWeather()),
          LocationUtil.getCurrentLocation$()
            .switchMap(({coords: { latitude, longitude }}) => {
              const location: ILocation = {
                lat: latitude,
                lng: longitude
              }
              return LocationUtil.getLocationData$(location)
                .switchMap(locationData => {
                  const result = locationData.response.results[0]
                  return merge(
                    of(setLocationData(result)),
                    of(finishLoadingLocation()),

                    // Use location data to fetch weather data
                    of(fetchWeatherData(location))
                  )
                })
            })
        )
        .catch(err => {
          console.error('[ERROR - FETCH_LOCATION_DATA]')
          console.error(err)
          if (err.message) {
            alert(err.message)
          } else {
            alert(JSON.stringify(err))
          }
          return merge(
            of(finishLoadingLocation()),
            of(finishLoadingWeather())
          )
        })
      })
}
