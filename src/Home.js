import React from 'react';
import axios from 'axios';
import ScheduleForm from './ScheduleForm.js'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      showModal: false,
      appointment: '',


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
      date: event.target.date.value,
      contactInfo: event.target.contactInfo.value,
      groupSize: event.target.groupSize.value,
      insurance: event.target.insurance.checked,
      photography: event.target.photography.checked,
    }
    console.log(scheduleObj);

    this.postAppointment(scheduleObj);
  }

  // *** handler 2 - posts to the database ***
  // postAppointment = async (scheduleObj) => {
  //   try {
  //     let url = `${process.env.REACT_APP_SERVER}/weather`
  //     let createdAppointment = await axios.post(url, scheduleObj);

  //     console.log(createdAppointment);

  //     this.setState({
  //       appointment: [...this.state., createdAppointment.data]
  //     })

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // *** delete appointment ***
  deleteAppointment = async (id) => {
    console.log('Did this fire?');

    try {

      let url = `${process.env.REACT_APP_SERVER}/weatherData/${id}`
      await axios.delete(url);

      let deletedAppointment = this.state.weatherData.filter(weather => weather._id !== id);

      this.setState({
        weather: deletedAppointment,
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

    return (
      <>
        <h1>Surfing America</h1>
        <ScheduleForm handleAppointmentSubmit={this.handleAppointmentSubmit} handleCloseModal={this.handleCloseModal} handleOpenModal={this.handleOpenModal} />
      </>
    )
  }
}

export default Home;


