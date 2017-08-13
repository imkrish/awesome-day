import { IAppState } from './IAppState'
import { RouterState } from 'react-router-redux'

export interface IRootState {
  app: IAppState,
  router: RouterState
}