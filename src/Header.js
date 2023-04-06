import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './App.css';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Surfing America</h1>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavItem><Link to="/" style={linkStyle} className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/about" style={linkStyle} className="nav-link">About Us</Link></NavItem>
          {/* PLACEHOLDER: render a navigation link to the about page */}
        </Navbar>
      </>
    )
  }
}

export default Header;