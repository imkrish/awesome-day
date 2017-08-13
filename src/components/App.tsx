import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { HelloContainer } from '../containers/HelloContainer'
import { Paper } from 'material-ui'
import { WelcomeText } from './WelcomeText'
import { DateTime } from './DateTime'

import { Route, Switch } from 'react-router'
import { QuoteContainer } from '../containers/QuoteContainer'
import { AppTabs } from './AppTabs'

export const App = (props: any) => {

  const { pathname } = props.location

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />

      <AppTabs
        pathname={pathname}
      />      

      <Paper
        style={{
          padding: '30px 15px 30px 15px'
        }}
        rounded={false}
      >
        {/* Current Date Time */}
        <DateTime />

        {/* Welcome Text */}
        <div style={{ marginTop: 20 }}>
          <WelcomeText />
        </div>
        
        {/* Router */}
        <div style={{ marginTop: 20 }}>
          <Switch>
            <Route exact={true} path="/" component={HelloContainer}/>
            <Route exact={true} path="/quote-todos" component={QuoteContainer}/>
          </Switch>
        </div>
      </Paper>

      <Footer />
    </div>
  )
}