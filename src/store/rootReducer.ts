import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { weatherReducer } from './weather/weatherReducer'
import { locationReducer } from './location/locationReducer'
import { quoteReducer } from './quote/quoteReducer'
import { todoReducer } from './todo/todoReducer'

export const rootReducer  = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  quote: quoteReducer,
  todo: todoReducer,
  router: routerReducer
})