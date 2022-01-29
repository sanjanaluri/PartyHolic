import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  render() {
    return (
      <Router>
        {this.getLocation()}
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
