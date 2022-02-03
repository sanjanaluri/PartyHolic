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
          <NavLink to='/partylist' activeStyle>
            PartyList
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
<<<<<<< Updated upstream
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
=======
          <NavBtnLink to="/sign-in" activeStyle>Sign In</NavBtnLink>
>>>>>>> Stashed changes
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;