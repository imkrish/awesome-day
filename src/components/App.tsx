import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { HelloContainer } from '../containers/HelloContainer'
import { Paper } from 'material-ui'
import { WelcomeText } from './WelcomeText'
import { DateTime } from './DateTime'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Route } from 'react-router'
import { QuoteContainer } from '../containers/QuoteContainer'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />
      <Tabs>
        <Tab
          label="Location &amp; Weather"
        />
        <Tab
          label="Random Quote"
        />
      </Tabs>

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
          <Route exact={true} path="/" component={HelloContainer}/>
          <Route exact={true} path="/quote" component={QuoteContainer}/>
        </div>
      </Paper>

      <Footer />
    </div>
  )
}