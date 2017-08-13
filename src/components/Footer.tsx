import * as React from 'react'
import Paper from 'material-ui/Paper'
import { blueGrey800, white } from 'material-ui/styles/colors'

export const Footer = () => {
  return (
    <Paper
      style={{
        display: 'flex',
        height: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 15px 0 15px',
        backgroundColor: blueGrey800,
        color: white
      }}
      rounded={false}
    >
      <p>Allied Telesis</p>
      <p>Keerati Limkulphong</p>
    </Paper> 
  )
}