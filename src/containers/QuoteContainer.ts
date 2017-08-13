import { connect } from 'react-redux'
import { IRootState } from '../store/interfaces/IRootState'
import { Quote } from '../components/Quote'
import { fetchQuote } from '../store/quote/quoteEpic'

export const QuoteContainer = connect(
  (state: IRootState) => ({
    loadingQuote: state.quote.loadingQuote,
    quote: state.quote.quote
  }),
  {
    fetchQuote
  }
)(Quote)