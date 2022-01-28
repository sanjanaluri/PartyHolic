import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";

function Homepage() {
  return (
    <div className="home">
      <header>
        <p className="pageHeader">Welcome to PartyHolic!!!!!</p>
      </header>

      <main>
        <Link to="/about">
          <p className="homeCategoryName">About page</p>
        </Link>
        <p className="homeCategoryHeading">Party categories</p>
        <div className="homeCategories">
          <img src={Image1} alt="rent" className="homeCategoryImg" />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
