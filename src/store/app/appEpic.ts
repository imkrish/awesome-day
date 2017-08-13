
import { ActionsObservable } from 'redux-observable'
import { Store } from 'redux'
import { IRootState } from '../interfaces/IRootState'
import { merge } from 'rxjs/observable/merge'
import { of } from 'rxjs/observable/of'
import { ILocation } from '../../interfaces/ILocation'
import {
  finishLoadingWeather,
  setWeatherDate,
  loadingLocation,
  finishLoadingLocation 
} from './appAction'
import { OpenWeatherUtil } from '../../utils/OpenWeatherUtil'
import { LocationUtil } from '../../utils/LocationUtil'
import {
  setLocationData,
  loadingWeather,
  setLastWeatherUpdated,
  loadingQuote,
  finishLoadingQuote,
  setQuote 
} from './appAction'
import { QuoteUtil } from '../../utils/QuoteUtil'

export const FETCH_LOCATION_DATA = '[EPIC] - FETCH_LOCATION_DATA'
export const FETCH_WEATHER_DATA = '[EPIC] - FETCH_WEATHER_DATA'
export const FETCH_QUOTE = '[EPIC] - FETCH QUOTE'

export const fetchWeatherData = (location: ILocation) => ({
  type: FETCH_WEATHER_DATA,
  payload: location
})

export const fetchLocationData = () => ({
  type: FETCH_LOCATION_DATA
})

export const fetchQuote = () => ({
  type: FETCH_QUOTE
})

export const appEpic = (action$: ActionsObservable <any>, state: Store <IRootState>) => {
  return merge(
    // FETCH_LOCATION_DATA
    action$.ofType(FETCH_LOCATION_DATA)
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
      }),
    
    // FETCH_WEATHER_DATA
    action$.ofType(FETCH_WEATHER_DATA)
      .switchMap(({ payload }) => {
        return merge(
          of(loadingWeather()),
          OpenWeatherUtil.getWeatherData$(payload)
            .switchMap(({ response }) => {
              return merge(
                of(finishLoadingWeather()),
                of(setLastWeatherUpdated(Date.now())),
                of(setWeatherDate(response))
              )
            })
        )
        .catch(err => {
          console.error('[ERROR - FETCH_WEATHER_DATA]')
          console.error(err)
          alert(JSON.stringify(err))
          return of(finishLoadingLocation())
        })
      }),

    // FETCH_QUOTE
    action$.ofType(FETCH_QUOTE)
      .switchMap(({ payload }) => {
        return merge(
          of(loadingQuote()),
          QuoteUtil.getRandomQuote$()
            .switchMap(({ response }) => {
              return merge(
                of(finishLoadingQuote()),
                of(setQuote(response.quote))
              )
            })
        )
        .catch(err => {
          console.error('[ERROR - FETCH_QUOTE]')
          console.error(err)
          alert(JSON.stringify(err))
          return of(finishLoadingQuote())
        })
      }),
  )
}