import * as React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { sPush } from '../store/routerActions'

interface IAppTabsProps {
  pathname: string
}

export const AppTabs = (props: IAppTabsProps) => {
  const { pathname } = props

  const shouldRender = () => {
    return pathname === '/' || pathname === '/quote' || pathname === '/todos'
  }

  const getSelectedIndex = () => {
    switch (pathname) {
      case '/':
        return 0

      case '/quote':
        return 1
      
      case '/todos':
        return 2

      default:
        return 0
    }
  }

  return (
    <div>
      {shouldRender() && (
        <Tabs
          initialSelectedIndex={getSelectedIndex()}
        >
          <Tab
            onClick={() => sPush('/')}
            label="Location &amp; Weather"
          />
          <Tab
            onClick={() => sPush('/quote')}
            label="Quote"
          />
          <Tab
            onClick={() => sPush('/todos')}
            label="Todos"
          />
        </Tabs>
      )}
    </div>
  )
}