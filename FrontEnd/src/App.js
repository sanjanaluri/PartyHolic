import React, {useState, useEffect} from "react";
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import PartyList from "./pages/PartyList";
import {EventsProvider} from './context/EventsContext'
import EventsContext from "./context/EventsContext";


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
          <Route path='/partylist' element={<PartyList/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
  );
}


export default App;
