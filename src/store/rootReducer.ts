import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { appReducer } from './app/appReducer'

export const rootReducer  = combineReducers({
  app: appReducer,
  router: routerReducer
})