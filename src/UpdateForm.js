import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class UpdateForm extends React.Component {

handleSubmit = (e) => {
    e.preventDefault();
    const updatedAppt = {
      contactInfo: e.target.contactInfo.value,
      groupSize: e.target.groupSize.value,
      insurance: e.target.insurance.checked,
      photography: e.target.photography.checked,
      _id: this.props.appointment._id,
      __v: this.props.appointment.__v,
    }
    this.props.handleCloseModal(updatedAppt);
}

  render() {
    return (
      <>
        <Modal show={this.props.handleOpenModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header> 
          <Modal.Body> 
            <Form onSubmit={this.handleSubmit}>

             <Form.Group controlId='contactInfo'>
               <Form.Label>Contact Info:</Form.Label>
               <Form.Control type="text" placeholder="Enter your contact information" defaultValue={this.props.appointment.contactInfo} />
              </Form.Group>

              <Form.Group controlId='groupSize'>
                <Form.Label>How many in your group:</Form.Label>
                <Form.Control type="text" placeholder="Enter amount of group members" defaultValue={this.props.appointment.groupSize} />
              </Form.Group>

              <Form.Group controlId='insurance'>
                <Form.Label>Do you have insurance:</Form.Label>
                <Form.Check type="checkbox" label="Yes" defaultChecked={this.props.appointment.insurance} />
              </Form.Group>

              <Form.Group controlId='photography'>
                <Form.Label>Will you need professional photography:</Form.Label>
                <Form.Check type="checkbox" label="Yes" defaultChecked={this.props.appointment.photography} />
              </Form.Group>

              <Button variant="primary" type="submit"> Submit </Button>
            </Form>
          </Modal.Body>
        </Modal > 
      </>
    );
  }
}

export default UpdateForm;