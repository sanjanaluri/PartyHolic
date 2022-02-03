import React, { useState, useEffect, useContext } from "react";
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


function App(props) {
  // const {getCoordinates} = useContext(EventsContext)

  const Submithandler = (e) => {
    // e.preventDefault();
    // console.log(coordinates);
    // axios
    //   .post("https://my-json-server.typicode.com/", coordinates)
    //   .then((resonse) => {
    //     console.log(resonse);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
