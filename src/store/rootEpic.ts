import { combineEpics } from 'redux-observable'
import { locationEpic } from './location/locationEpic'
import { weatherEpic } from './weather/weatherEpic'
import { quoteEpic } from './quote/quoteEpic'

export const rootEpic = combineEpics(
  locationEpic,
  weatherEpic,
  quoteEpic
)