import { ILocationState } from '../interfaces/ILocationState'
import { lensProp, set } from 'ramda'
import { IAction } from '../interfaces/IAction'
import { SET_LOCATION_DATA, LOADING_LOCATION, FINISH_LOADING_LOCATION } from './locationAction'

export const initState: ILocationState = {
  loadingLocation: false,
  locationData: undefined
}

export const loadingLocationLens = lensProp('loadingLocation')
export const locationDataLens = lensProp('locationData')

export const locationReducer = (state = initState, action: IAction) => {
  const { type, payload } = action

  switch (type) {
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

    default:
      return state
  }
}