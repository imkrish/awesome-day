import { IQuotState } from '../interfaces/IQuoteState'
import { lensProp, set } from 'ramda'
import { IAction } from '../interfaces/IAction'
import { LOADING_QUOTE, FINISH_LOADING_QUOTE, SET_QUOTE } from './quoteAction'

export const initState: IQuotState = {
  loadingQuote: false,
  quote: undefined
}

export const loadingQuoteLens = lensProp('loadingQuote')
export const quoteLens = lensProp('quote')

export const quoteReducer = (state = initState, action: IAction) => {
  const { type, payload } = action

  switch (type) {
    case LOADING_QUOTE:
      return set(
        loadingQuoteLens,
        true,
        state
      )

    case FINISH_LOADING_QUOTE:
      return set(
        loadingQuoteLens,
        false,
        state
      )

    case SET_QUOTE:
      return set(
        quoteLens,
        payload,
        state
      )

    default:
      return state
  }
}