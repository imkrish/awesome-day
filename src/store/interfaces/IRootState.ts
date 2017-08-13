import { RouterState } from 'react-router-redux'
import { ILocationState } from './ILocationState'
import { IWeatherState } from './IWeatherLocation'
import { IQuotState } from './IQuoteState'

export interface IRootState {
  location: ILocationState
  weather: IWeatherState
  quote: IQuotState
  router: RouterState
}