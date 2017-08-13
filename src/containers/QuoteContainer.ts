import { connect } from 'react-redux'
import { IRootState } from '../store/interfaces/IRootState'
import { Quote } from '../components/Quote'
import { fetchQuote } from '../store/app/appEpic'

export const QuoteContainer = connect(
  (state: IRootState) => ({
    loadingQuote: state.app.loadingQuote,
    quote: state.app.quote
  }),
  {
    fetchQuote
  }
)(Quote)