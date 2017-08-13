import { IWeatherState } from '../interfaces/IWeatherLocation'
import { lensProp, set } from 'ramda'
import { IAction } from '../interfaces/IAction'
import { SET_WEATHER_DATA, LOADING_WEATHER, FINISH_LOADING_WEATHER, SET_LAST_WEATHER_UPDATED } from './weatherAction'

export const initState: IWeatherState = {
  loadingWeather: false,
  weatherData: undefined,
  lastWeatherUpdated: undefined
}

export const loadingWeatherLens = lensProp('loadingWeather')
export const weatherDataLens = lensProp('weatherData')
export const lastWeatherUpdatedLens = lensProp('lastWeatherUpdated')

export const weatherReducer = (state = initState, action: IAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_WEATHER_DATA:
      return set(
        weatherDataLens,
        payload,
        state
      )

    case LOADING_WEATHER:
      return set(
        loadingWeatherLens,
        true,
        state
      )

    case FINISH_LOADING_WEATHER:
      return set(
        loadingWeatherLens,
        false,
        state
      )

    case SET_LAST_WEATHER_UPDATED:
      return set(
        lastWeatherUpdatedLens,
        payload,
        state
      )

    default:
      return state
  }
}