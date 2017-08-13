import * as React from 'react'
import { Paper, CircularProgress, FloatingActionButton } from 'material-ui'
import { NavigationRefresh } from 'material-ui/svg-icons'

interface IQuoteProps {
  // State
  loadingQuote: boolean
  quote: string

  // Action
  fetchQuote: () => void
}

export class Quote extends React.Component<IQuoteProps, {}> {

  componentWillMount() {
    this.props.fetchQuote()
  }

  render () {
    const { fetchQuote, loadingQuote, quote } = this.props
  
    return (
      <Paper style={{ padding: 30, marginTop: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{ fontSize: 20, marginRight: 20 }}>Random Quote</h2>
          <FloatingActionButton mini={true} disabled={!quote || loadingQuote} onTouchTap={fetchQuote}>
            <NavigationRefresh />
          </FloatingActionButton>
        </div>
        {!loadingQuote && quote && (
          <div style={{ marginLeft: 10, marginTop: 30 }}>
            <p>" {quote} "</p> 
          </div>
        )}
        {loadingQuote && (
          <CircularProgress style={{ marginLeft: 10, marginTop: 30 }} size={50} thickness={5} />
        )}
      </Paper>
    )
  }
  
}