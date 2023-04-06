import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class ApptCard extends Component {
  handleUpdateButton = () => {
    this.props.handleOpenModal();
  }
  
  render() {
    return (
      <>
      {
        this.props.appt.map((appointment, idx) => {
          
          return (<Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Appointment</Card.Title>
              <Card.Text>
                Contact Email: {appointment.contactInfo} 
                Group Size: {appointment.groupSize}
              </Card.Text>
              <Button variant="primary" onClick={this.handleUpdateButton}>Update Appointment</Button>
              <Button variant="danger" onClick={this.handleDeleteButton}>Delete Appointment</Button>
            </Card.Body>
          </Card>
        )})
        }
      </>
    );
  }
}
