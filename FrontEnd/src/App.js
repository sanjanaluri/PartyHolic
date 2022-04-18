import React, { useState, useEffect, useContext, createContext, useReducer } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import PartyList from "./pages/PartyList";
import { EventsProvider } from "./context/EventsContext";
import PartyDetail from "./pages/PartyDetail";
import AddForm from "./components/AddForm";
import Logout from "./pages/logout";
import { initialState,reducer } from "./reducer/useReducer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../src/Utils/contexts";
import { isUserLogedApi } from "./api/auth";
export const UserContext = createContext();

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
    if (refreshCheckLogin == true) {
      history("/");
    }
  }, [refreshCheckLogin]);

  //setRefreshCheckLogin={setRefreshCheckLogin}
  // if (!loadUser) return null;
  
  const Routing = () => {

    return (
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partylist" element={<PartyList />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/add-event" element={<AddForm />} />
          <Route
            path="/sign-in"
            element={<SignIn setRefreshCheckLogin={setRefreshCheckLogin} />}
          />
          <Route path="/partyDetail/:partyId" element={<PartyDetail />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    )

  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <UserContext.Provider value ={{state,dispatch}}>
    <EventsProvider>

      <Navbar />
      <Routing />

    </EventsProvider>
    </UserContext.Provider>
    </>
  )
}


export default App;
