import * as React from 'react'
import Paper from 'material-ui/Paper'
import { ImageWbSunny } from 'material-ui/svg-icons'
import { primaryColor } from '../index'
import { white, yellow300, orange300 } from 'material-ui/styles/colors'

export const Header = () => {
  return (
    <Paper
      style={{
        display: 'flex',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
        padding: '0 15px 0 15px',
        zIndex: 1000
      }}
      rounded={false}
    >
      <ImageWbSunny
        style={{
          marginRight: 5,
        }}
        color={yellow300}
        hoverColor={orange300}
      />
      <span
        style={{
          color: white
        }}
      >
        AWESOME DAY
      </span>
    </Paper>  
  )
}