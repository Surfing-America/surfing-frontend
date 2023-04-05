// import React from "react";
// import Calendar from 'react-calendar'
// import "react-calendar/dist/Calendar.css";
// import "./Calendar.css";


// class WeekCalendar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentDate: new Date(),
//     };
//   }

//   handlePrevWeek = () => {
//     const newDate = new Date(this.state.currentDate);
//     newDate.setDate(newDate.getDate() - 7);
//     this.setState({ currentDate: newDate });
//   };

//   handleNextWeek = () => {
//     const newDate = new Date(this.state.currentDate);
//     newDate.setDate(newDate.getDate() + 7);
//     this.setState({ currentDate: newDate });
//   };

//   render() {
//     const startOfWeek = new Date(this.state.currentDate);
//     startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
//     const endOfWeek = new Date(this.state.currentDate);
//     endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));

//     return (
//       <>
//         <button onClick={this.handlePrevWeek}>Prev Week</button>
//         <button onClick={this.handleNextWeek}>Next Week</button>
//         <Calendar startDate={startOfWeek} endDate={endOfWeek} view="week" />
//       </>
//     );
//   }
// }

// export default WeekCalendar;

