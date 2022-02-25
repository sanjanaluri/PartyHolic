import EventsContext from "../context/EventsContext";
import { useContext } from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import mapStyles from "../components/mapStyles";

function Map(thisParty) {
  const [selectedPark, setSelectedPark] = useState(false);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(false);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 29.6175, lng: -82.37871 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{
          lat: 29.6175,
          lng: -82.37871,
        }}
        onClick={() => {
          setSelectedPark(true);
          console.log(selectedPark);
        }}
      />
      <Marker
        position={{
          lat: thisParty.latitude,
          lng: thisParty.latitude,
        }}
      />

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(false);
          }}
          position={{
            lat: 29.6175,
            lng: -82.37871,
          }}
        >
          <div>
            <h2>Santosh</h2>
            <p>This is my Party</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

function PartyDetail(props) {
  const { partyId } = useParams();
  const { eventsList } = useContext(EventsContext);
  const thisParty = eventsList.parties.find((data) => data.party_id == partyId);
  
  const MapWrapped = withScriptjs(withGoogleMap(() => Map(thisParty)));

  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
        position: "absolute",
        bottom: "0px",
      }}
    >
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAPirDDFz7WN4fP83viAvaBhVTQr6t0i7A`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default PartyDetail;
