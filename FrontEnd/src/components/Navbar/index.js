import React,{useContext} from "react";
import { GiPartyHat } from "react-icons/gi";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavarElements";
import { UserContext} from "../../App";

const Navbar = (props) => {
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if(state){


      return (
        <>
      <NavLink to="/about" activeStyle>
        About
      </NavLink> 
      <NavLink to="/partylist" activeStyle>
        Events
      </NavLink> 
      <NavLink to="/contact-us" activeStyle>
        Contact Us
      </NavLink> 
      <NavLink to="/logout" activeStyle>
        Log out
      </NavLink>
      </>
      )
    }
    else{
      return (
        <>
        <NavLink to="/about" activeStyle>
        About
      </NavLink> 
      <NavLink to="/partylist" activeStyle>
        Events
      </NavLink> 
      <NavLink to="/contact-us" activeStyle>
        Contact Us
      </NavLink> 
      <NavLink to="/sign-up" activeStyle>
        Sign Up
      </NavLink> 
      <NavLink to="/sign-in" activeStyle>
        Sign In
      </NavLink> 
      </>
      )
    }
  }

  return (
    <>
      <Nav>
        <NavLink to="/">
          <GiPartyHat size={40} />
          <div className="text-3xl font-sans font-semibold">PartyHolic</div>
        </NavLink>
        <Bars />
        <NavMenu>
          <RenderMenu/>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
