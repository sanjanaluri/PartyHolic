import React from 'react';
import {GiPartyHat} from 'react-icons/gi'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <GiPartyHat size={40}/>
          <h1>PartyHolic</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;