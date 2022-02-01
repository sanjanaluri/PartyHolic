import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ZipCode from "../components/Zipcode";
import Geolocation from "../components/Geolocation";

function Home(props) {
  const [zipCodeOpen, setZipCodeOpen] = useState(false);
  const [geoLocOpen, setGeoLocOpen] = useState(true);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  function openZipCodeModal() {
    setZipCodeOpen(true);
  }

  function closeZipCodeModal() {
    setZipCodeOpen(false);
    alert("Entered zip code is xx");
  }

  function openGeoLocModal() {
    setGeoLocOpen(true);
  }

  function closeGeoLocModal() {
    setGeoLocOpen(false);
    alert("Received geo location");
  }

  return (
    <div className="home">
      <main>
        <button onClick={openZipCodeModal}>Press for zipcode</button>
        {zipCodeOpen && <ZipCode onEnter={closeZipCodeModal} />}
        {geoLocOpen && <Geolocation onEnter={closeGeoLocModal} />}
        <div className="homeCategories">
          <img src='assets/Image1.jpg' alt="rent" className="homeCategoryImg" />
        </div>
        <div>
          <p>. </p>
          <p>. </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
