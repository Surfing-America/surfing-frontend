import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class WeatherCard extends React.Component {
  handleUpdateButton = () => {
    this.props.handleOpenModal();
  }


  render() {
    return (

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.NAME.OF.DATE.DATA}</Card.Title>
          <Card.Text>
            {this.NAME.OF.FORM.DATA}
          </Card.Text>
          <Button variant="primary" onClick={this.NAME.OF.FORM.HANDLER}>Update Here</Button>
        </Card.Body>
      </Card>
    );
  }
}


export default WeatherCard;
