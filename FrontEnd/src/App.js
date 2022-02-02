import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import PartyList from "./pages/PartyList";
import { EventsProvider } from "./context/EventsContext";
import EventsContext from "./context/EventsContext";
import axios from "axios";

function App(props) {
  const [coordinates, setcoordinates] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setcoordinates((prevState) => {
        return {
          ...prevState,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      });
      // setLatitude(position.coords.latitude);
      // setLongitude(position.coords.longitude);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  const Submithandler = (e) => {
    e.preventDefault();
    console.log(coordinates);
    axios
      .post("https://my-json-server.typicode.com/", coordinates)
      .then((resonse) => {
        console.log(resonse);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <EventsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partylist" element={<PartyList />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

        <button onClick={Submithandler}>Submit</button>
      </Router>
    </EventsProvider>
  );
}

export default App;
