import { set, lensProp } from 'ramda'
import { IAppState } from '../interfaces/IAppState'
import {
  SET_WEATHER_DATA,
  LOADING_WEATHER,
  FINISH_LOADING_WEATHER,
  SET_LOCATION_DATA,
  LOADING_LOCATION,
  FINISH_LOADING_LOCATION,
  SET_LAST_WEATHER_UPDATED,
  LOADING_QUOTE,
  FINISH_LOADING_QUOTE,
  SET_QUOTE
} from './appAction'
import { IAction } from '../interfaces/IAction'

export const initState: IAppState = {
  loadingLocation: false,
  locationData: undefined,

  loadingWeather: false,
  weatherData: undefined,
  lastWeatherUpdated: undefined,

  loadingQuote: false,
  quote: undefined
}

export const loadingWeatherLens = lensProp('loadingWeather')
export const weatherDataLens = lensProp('weatherData')
export const loadingLocationLens = lensProp('loadingLocation')
export const locationDataLens = lensProp('locationData')
export const lastWeatherUpdatedLens = lensProp('lastWeatherUpdated')
export const loadingQuoteLens = lensProp('loadingQuote')
export const quoteLens = lensProp('quote')

export const appReducer = (state = initState, action: IAction) => {
  const { type, payload } = action

  switch (type) {

    // Location
    case SET_LOCATION_DATA:
      return set(
        locationDataLens,
        payload,
        state
      )

    case LOADING_LOCATION:
      return set(
        loadingLocationLens,
        true,
        state
      )

    case FINISH_LOADING_LOCATION:
      return set(
        loadingLocationLens,
        false,
        state
      )

    // Weather
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

    // Quote
    case LOADING_QUOTE:
      return set(
        loadingQuoteLens,
        true,
        state
      )

    case FINISH_LOADING_QUOTE:
      return set(
        loadingQuoteLens,
        false,
        state
      )

    case SET_QUOTE:
      return set(
        quoteLens,
        payload,
        state
      )

    default:
      return state
  }
}