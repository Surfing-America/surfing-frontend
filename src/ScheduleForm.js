import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class ScheduleForm extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.handleOpenModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header> 
          <Modal.Body> 
            <Form onSubmit={this.props.handleAppointmentSubmit}>

             <Form.Group controlId='contactInfo'>
               <Form.Label>Contact Info:</Form.Label>
               <Form.Control type="text" placeholder="Enter your contact information" />
              </Form.Group>

              <Form.Group controlId='groupSize'>
                <Form.Label>How many in your group:</Form.Label>
                <Form.Control type="text" placeholder="Enter amount of group members" />
              </Form.Group>

              <Form.Group controlId='insurance'>
                <Form.Label>Do you have insurance:</Form.Label>
                <Form.Check type="checkbox" label="Yes" />
              </Form.Group>

              <Form.Group controlId='photography'>
                <Form.Label>Will you need professional photography:</Form.Label>
                <Form.Check type="checkbox" label="Yes" />
              </Form.Group>

              <Button variant="primary" type="submit"> Submit </Button>
            </Form>
          </Modal.Body>
        </Modal > 
      </>
    );
  }
}

export default ScheduleForm;