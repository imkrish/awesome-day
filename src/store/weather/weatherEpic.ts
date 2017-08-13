import { ILocation } from '../../interfaces/ILocation'
import { ActionsObservable } from 'redux-observable'
import { Store } from 'redux'
import { IRootState } from '../interfaces/IRootState'
import { merge } from 'rxjs/observable/merge'
import { loadingWeather, finishLoadingWeather, setLastWeatherUpdated, setWeatherDate } from './weatherAction'
import { of } from 'rxjs/observable/of'
import { OpenWeatherUtil } from '../../utils/OpenWeatherUtil'
import { finishLoadingLocation } from '../location/locationAction'

export const FETCH_WEATHER_DATA = '[EPIC] - FETCH_WEATHER_DATA'

export const fetchWeatherData = (location: ILocation) => ({
  type: FETCH_WEATHER_DATA,
  payload: location
})

export const weatherEpic = (action$: ActionsObservable<any>, state: Store<IRootState>) => {
  return action$.ofType(FETCH_WEATHER_DATA)
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
      })
}