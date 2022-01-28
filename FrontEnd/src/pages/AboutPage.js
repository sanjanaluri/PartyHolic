
import React  from "react";
import { Link } from "react-router-dom";

function About(){
    return(
        <div className='about'>
            <Link to='/'>
            <p className='homeCategoryName'>Back to Home</p>
          </Link>
        <h1>
            Hi! this is about our website PartyHolic......!
            We provide details about ongoing parties around your area.
        </h1>
        </div>
    )
}

export default About;