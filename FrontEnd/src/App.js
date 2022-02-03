import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import PartyList from "./pages/PartyList";
<<<<<<< Updated upstream
=======
import { EventsProvider } from "./context/EventsContext";
import EventsContext from "./context/EventsContext";
import SignIn from "./pages/signIn";
>>>>>>> Stashed changes


function App(props) {
  return (
<<<<<<< Updated upstream
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
=======
    <EventsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partylist" element={<PartyList />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>

        <button onClick={Submithandler}>Submit</button>
      </Router>
    </EventsProvider>
>>>>>>> Stashed changes
  );
}


export default App;
