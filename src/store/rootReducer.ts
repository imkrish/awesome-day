import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { weatherReducer } from './weather/weatherReducer'
import { locationReducer } from './location/locationReducer'
import { quoteReducer } from './quote/quoteReducer'

export const rootReducer  = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  quote: quoteReducer,
  router: routerReducer
})