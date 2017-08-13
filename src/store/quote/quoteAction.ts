export const LOADING_QUOTE = 'LOADING_QUOTE'
export const FINISH_LOADING_QUOTE = 'FINISH_LOADING_QUOTE'
export const SET_QUOTE = 'SET_QUOTE'

export const loadingQuote = () => ({
  type: LOADING_QUOTE
})

export const finishLoadingQuote = () => ({
  type: FINISH_LOADING_QUOTE
})

export const setQuote = (quote: string) => ({
  type: SET_QUOTE,
  payload: quote
})