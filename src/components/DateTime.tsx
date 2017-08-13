import * as React from 'react'
import { DeviceAccessTime } from 'material-ui/svg-icons'
import { primaryColor } from '../index'

export class DateTime extends React.Component<{}, {}> {
  dateTimeP: HTMLParagraphElement

  componentWillMount() {
    this.setDateTime()
    setInterval(
      this.setDateTime, 
      1000
    )
  }

  setDateTime = () => {
    const now = new Date()
    if (this.dateTimeP) {
      this.dateTimeP.innerHTML = `${now.toDateString()} - ${now.toLocaleTimeString()} `
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <DeviceAccessTime
          color={primaryColor}
          style={{ 
            marginRight: 5
          }}
        />
        <p
          ref={(elem: any) => this.dateTimeP = elem}
        />
      </div>
    )
  }
  
}