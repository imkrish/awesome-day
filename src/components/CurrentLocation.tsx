import * as React from 'react'
import { Paper, CircularProgress } from 'material-ui'

interface ICurrentLocationProps {
  loadingLocation: boolean
  locationData: any
}

export const CurrentLocation = (props: ICurrentLocationProps) => {
  const { loadingLocation, locationData } = props
  return (
    <Paper style={{ padding: 30, marginTop: 40 }}>
      <h2 style={{ fontSize: 20 }}>Current Location</h2>
      {!loadingLocation && locationData && (
        <div style={{ marginTop: 30 }}>
          <p>{locationData.formatted_address}</p> 
        </div>
      )}
      {loadingLocation && (
        <CircularProgress style={{ marginLeft: 20, marginTop: 30 }} size={50} thickness={5} />
      )}
    </Paper>
  )
}