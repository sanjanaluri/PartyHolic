import React, {useState, useEffect} from "react";
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';


function App(props) {
  const[latitude, setLatitude] = useState('');
  const[longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  },[]);

  return (
    <Router>
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

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: null,
//       longitude: null,
//     };
//     this.getLocation = this.getLocation.bind(this);
//     this.getCoordinates = this.getCoordinates.bind(this);
//   }

// }

export default App;
