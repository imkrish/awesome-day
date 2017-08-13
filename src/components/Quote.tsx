import * as React from 'react'
import { Paper, CircularProgress } from 'material-ui'

interface IQuoteProps {
  // State
  loadingQuote: boolean
  quote: string

  // Action
  fetchQuote: Function
}

export class Quote extends React.Component<IQuoteProps, {}> {

  componentWillMount() {
    this.props.fetchQuote()
  }

  render () {
    const { loadingQuote, quote } = this.props
    
    return (
      <Paper style={{ padding: 30, marginTop: 40 }}>
        <h2 style={{ fontSize: 20 }}>Random Quote</h2>
        {!loadingQuote && quote && (
          <div style={{ marginLeft: 10, marginTop: 30 }}>
            <p>{quote}</p> 
          </div>
        )}
        {loadingQuote && (
          <CircularProgress style={{ marginLeft: 10, marginTop: 30 }} size={50} thickness={5} />
        )}
      </Paper>
    )
  }
  
}