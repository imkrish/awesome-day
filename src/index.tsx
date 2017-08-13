import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { App } from './components/App'
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import * as reactTapEventPlugin from 'react-tap-event-plugin'

// RxJS
import 'rxjs/add/operator/timeout'
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

// Config Store
const history = createBrowserHistory()
export const store = configureStore(history)

// Config Material Ui
export const primaryColor = '#03A9F4'
export const accentColor = '#FF5722'
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: primaryColor,
    accent1Color: accentColor
  }
})

reactTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
