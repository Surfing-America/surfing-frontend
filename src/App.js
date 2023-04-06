import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home.js'
import About from './About.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<Home />}
            >
            </Route>
            <Route 
              exact path="/about"
              element={<About />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}


export default App;
