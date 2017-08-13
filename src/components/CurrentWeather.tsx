import * as React from 'react'
import { CircularProgress, FloatingActionButton, Paper } from 'material-ui'
import { NavigationRefresh } from 'material-ui/svg-icons'
import { grey700 } from 'material-ui/styles/colors'

interface ICurrentWeatherProps {
  loadingWeather: boolean
  weatherData: any
  lastWeatherUpdated: number
  locationData: any
  onRefreshWeatherData: () => void
}

export const CurrentWeather = (props: ICurrentWeatherProps) => {
  const getTitleValueText = (title: string, value: any, unit?: string) => (
    <div style={{ display: 'flex' }}>
      <div style={{ minWidth: 150, color: grey700 }}>{title}</div>
      <div style={{ minWidth: 50 }}>{value}</div>
      {unit && (
        <div>{unit}</div>
      )}
    </div>
  )

  const { loadingWeather, weatherData, lastWeatherUpdated, locationData, onRefreshWeatherData } = props

  return (
    <Paper style={{ padding: 30 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 20, marginRight: 20 }}>Current Weather</h2>
            {lastWeatherUpdated && (
              <p style={{ fontSize: 14 }}>Last Updated: {new Date(lastWeatherUpdated).toLocaleTimeString()}</p>
            )}
          </div>
          <FloatingActionButton
            mini={true}
            disabled={!locationData || loadingWeather}
            onTouchTap={onRefreshWeatherData}
          >
            <NavigationRefresh />
          </FloatingActionButton>
        </div>
      </div>
      
      {!loadingWeather && weatherData && (
        <div style={{ marginTop: 30 }}>
          <div style={{ marginTop: 10 }}>
            {getTitleValueText('Temp', weatherData.main.temp, '°C')}
          </div>
          <div style={{ marginTop: 10 }}>
            {getTitleValueText('Humidity', weatherData.main.humidity, '%')}
            {getTitleValueText('Pressure', weatherData.main.pressure, 'hPa')}
            {getTitleValueText('Wind Speed', weatherData.wind.speed, 'km/h')}
          </div>
          <div style={{ marginTop: 10 }}>
            {getTitleValueText('Sunrise', new Date(Number(weatherData.sys.sunrise + '000')).toLocaleTimeString())}
            {getTitleValueText('Sunset', new Date(Number(weatherData.sys.sunset + '000')).toLocaleTimeString())}
          </div>
        </div>
      )}
      {loadingWeather && (
        <CircularProgress style={{ marginLeft: 20, marginTop: 30 }} size={50} thickness={5} />
      )}
    </Paper>
  )
}