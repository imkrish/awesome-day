import { combineEpics } from 'redux-observable'
import { appEpic } from './app/appEpic'

export const rootEpic = combineEpics(
  appEpic
)