import * as React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { sPush } from '../store/routerActions'

interface IAppTabsProps {
  pathname: string
}

export const AppTabs = (props: IAppTabsProps) => {
  const { pathname } = props

  const shouldRender = () => {
    return pathname === '/' || pathname === '/quote'
  }

  return (
    <div>
      {shouldRender() && (
        <Tabs
          initialSelectedIndex={pathname === '/' ? 0 : 1}
        >
          <Tab
            onClick={() => sPush('/')}
            label="Location &amp; Weather"
          />
          <Tab
            onClick={() => sPush('/quote')}
            label="Random Quote"
          />
        </Tabs>
      )}
    </div>
  )
}