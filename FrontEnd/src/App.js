import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import PartyList from "./pages/PartyList";
import { EventsProvider } from "./context/EventsContext";
import PartyDetail from "./pages/PartyDetail";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../src/Utils/contexts";
import { isUserLogedApi } from "./api/auth";


function App(props) {
  const history = useNavigate();

  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);
  console.log(refreshCheckLogin);
  useEffect(() => {
    // setUser(isUserLogedApi());
    // setRefreshCheckLogin(false);
    // setLoadUser(true);
    if(refreshCheckLogin == true){
      history("/");
    }
  }, [refreshCheckLogin]);

  //setRefreshCheckLogin={setRefreshCheckLogin}
  // if (!loadUser) return null;

  return (
    <EventsProvider>
        <Router>
        <Routes>
        <Navbar />
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partylist" element={<PartyList />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/sign-in"
            element={<SignIn setRefreshCheckLogin={setRefreshCheckLogin} />}
          />
          <Route path="/partyDetail/:partyId" element={<PartyDetail />} />
        </Routes>
        </Router>
    </EventsProvider>
  );
}

export default App;
