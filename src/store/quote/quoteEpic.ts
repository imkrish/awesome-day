import { ActionsObservable } from 'redux-observable'
import { Store } from 'redux'
import { merge } from 'rxjs/observable/merge'
import { of } from 'rxjs/observable/of'
import { loadingQuote, finishLoadingQuote, setQuote } from './quoteAction'
import { QuoteUtil } from '../../utils/QuoteUtil'
import { IRootState } from '../interfaces/IRootState'
export const FETCH_QUOTE = '[EPIC] - FETCH QUOTE'

export const fetchQuote = () => ({
  type: FETCH_QUOTE
})

export const quoteEpic = (action$: ActionsObservable<any>, state: Store<IRootState>) => {
  return action$.ofType(FETCH_QUOTE)
    .switchMap(({ payload }) => {
      return merge(
        of(loadingQuote()),
        QuoteUtil.getRandomQuote$()
          .switchMap(({ response }) => {
            return merge(
              of(finishLoadingQuote()),
              of(setQuote(response.quote))
            )
          })
      )
      .catch(err => {
        console.error('[ERROR - FETCH_QUOTE]')
        console.error(err)
        alert(JSON.stringify(err))
        return of(finishLoadingQuote())
      })
    })

}