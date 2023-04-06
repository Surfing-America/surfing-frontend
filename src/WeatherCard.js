import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherCard extends React.Component {

  render() {
    return (
      <>
      {
        this.props.weather.map((day, idx) => {
          
          return (<Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Water Temperature: {day.waterTemperature}</Card.Title>
              <Card.Text>
                Wave Height: {day.waveHeight}
                Swell Height: {day.swellHeight}
                Swell Period: {day.swellPeriod}
                Swell Direction: {day.swellDirection}
              </Card.Text>
            </Card.Body>
          </Card>
        )})
      }
      </>
    );
  }
}


export default WeatherCard;
