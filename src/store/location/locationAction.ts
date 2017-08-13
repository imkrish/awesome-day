export const LOADING_LOCATION = 'LOADING_LOCATION'
export const FINISH_LOADING_LOCATION = 'FINISH_LOADING_LOCATION'
export const SET_LOCATION_DATA = 'SET_LOCATION_DATA'

export const loadingLocation = () => ({
  type: LOADING_LOCATION
})

export const finishLoadingLocation = () => ({
  type: FINISH_LOADING_LOCATION
})

export const setLocationData = (locationData: any) => ({
  type: SET_LOCATION_DATA,
  payload: locationData
})