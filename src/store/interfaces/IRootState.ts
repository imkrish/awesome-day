import { RouterState } from 'react-router-redux'
import { ILocationState } from './ILocationState'
import { IQuotState } from './IQuoteState'
import { ITodoState } from './ITodoState'
import { IWeatherState } from './IWeatherState'

export interface IRootState {
  location: ILocationState
  weather: IWeatherState
  quote: IQuotState
  todo: ITodoState
  router: RouterState
}