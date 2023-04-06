import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateForm from './UpdateForm';

export default class ApptCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedAppt: {},
    }
  }
  handleUpdateButton = (apptObj) => {
    this.setState({
      selectedAppt: apptObj,
      showModal: true,
    });
  }

  handleCloseModal = (updatedAppt) => {
    this.setState({
      showModal: false,
    });
    this.props.updateAppt(updatedAppt);
  }

  // handleDeleteButton = (apptObj) => {
  //   this.props.deleteAppointment(apptObj);
  // }

  render() {
    return (
      <>
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
                  <Button variant="primary" onClick={() => {this.handleUpdateButton(appointment)}}>Update Appointment</Button>
                  <Button variant="danger" onClick={() => {this.props.handleDeleteButton(appointment._id) }}>Delete Appointment</Button>
                </Card.Body>
              </Card>
              )
            })
          }
        </>
        <>
          <UpdateForm appointment={this.state.selectedAppt}handleOpenModal={this.state.showModal} updateAppt={this.props.updateAppt} handleCloseModal={this.handleCloseModal} />
        </>
      </>
    );
  }
}
