import React from 'react';
import axios from 'axios';
import ScheduleForm from './ScheduleForm.js'
import WeatherCard from './WeatherCard.js';
import Login from './Login.js';
import Logout from './Logout.js';
import Profile from './Profile.js';
import { withAuth0 } from "@auth0/auth0-react";
import ApptCard from './ApptCard.js';

// import UpdateForm from './UpdateForm.js';

// import Container from 'react-bootstrap/Container';
// import Calendar from './Calendar.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      showModal: true,
      appointment: [],
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,

    });
  }

  // *** get weather data ***
  getWeatherData = async () => {
    try {

      let url = `${process.env.REACT_APP_SERVER}/weatherData`
      let weatherData = await axios.get(url);

      this.setState({
        weather: weatherData.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  // *** add appointment with the form ***
  handleAppointmentSubmit = (event) => {
    event.preventDefault();

    //TODO: build out a schedule object based off of the form data
    let scheduleObj = {
      // date: event.target.date.value,
      contactInfo: event.target.contactInfo.value,
      groupSize: event.target.groupSize.value,
      insurance: event.target.insurance.checked,
      photography: event.target.photography.checked,
    }
    console.log(scheduleObj);

    this.postAppointment(scheduleObj);
    this.handleCloseModal();
  }
  

  // *** handler 2 - posts to the database ***
  postAppointment = async (scheduleObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/calendar`
      let createdAppointment = await axios.post(url, scheduleObj);

      console.log(createdAppointment);

      this.setState({
        appointment: [...this.state.appointment, createdAppointment.data]
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  // *** handler 3 - update appointment ***
  updateAppt = async (updatedAppointment) => {
    console.log(updatedAppointment);
    try {
      let url = `${process.env.REACT_APP_SERVER}/calendar/${updatedAppointment._id}`
      console.log('UPDATE URL INFO: ', url);

      let updatedAppt = await axios.put(url, updatedAppointment)

      console.log('UPDATED APPT: ', updatedAppt);

      let updatedAppointmentArray = this.state.appointment.map(existingAppt => {
        return existingAppt._id === updatedAppointment._id
          ? updatedAppt.data
          : existingAppt
      })
      this.setState({
        appointment: updatedAppointmentArray,
        showForm: false
      })
    } catch (error) {

      console.log(error.message)
    }
  }



  // *** handler 4 - delete appointment ***
  deleteAppointment = async (id) => {
    console.log('Did this fire?');

    try {

      let url = `${process.env.REACT_APP_SERVER}/calendar/${id}`
      await axios.delete(url);

      let deletedAppointment = this.state.appointment.filter(appt => appt._id !== id);

      this.setState({
        appointment: deletedAppointment,
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  // *** React Lifecycle Method ***
  componentDidMount(){
    this.getWeatherData();
  }

  render() {
    console.log('SURF DATA FROM BACKEND:', this.state.weather);
    console.log('APPT DATA: ', this.state.appointment);
    return (
      <>
        <h3>Todays Surfing Data</h3> 
        {
          this.props.auth0.isAuthenticated ?
          <>
          
          <Profile />
          <Logout />

          <ScheduleForm  handleCloseModal={this.handleCloseModal} handleOpenModal={this.state.showModal} handleAppointmentSubmit={this.handleAppointmentSubmit}/>
          <ApptCard appt={this.state.appointment} updateAppt={this.updateAppt} handleDeleteButton={this.deleteAppointment} handleCloseModal={this.handleCloseModal} handleOpenModal={this.state.showModal} />
        
          </>
          
          :
          <>
          <Login />
          <WeatherCard weather={this.state.weather} />
          </>
        }
      </>
    )
  }
}

export default withAuth0(Home);
