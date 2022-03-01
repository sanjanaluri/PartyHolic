
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

function Map(partyData) {
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
          lat: partyData.latitude,
          lng: partyData.latitude,
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
  console.log(partyId)

  const [partyData, setPartyData] = useState(null);
  const [partyIdFetched,setPartyIdFetched] = useState(false);
  let MapWrapped;
  function showDetails(){
    useEffect(() => {
      fetch(`http://localhost:8080/api/getParty/${partyId}`,  {
        method:'GET',
        headers:{ 'Content-Type':'appplication/json'},
    }
    ).then(res =>{
        return res.json();
      }).then(data =>{
        console.log(data)
        console.log(data.data);
        setPartyData(data);
        setPartyIdFetched(true);
        MapWrapped = withScriptjs(withGoogleMap(() => Map(partyData)));
      })
    },[]);
  
  }
  
  showDetails(); 
  
  return ( 
    <>
    { partyIdFetched && 
    <div 
      style={{
        
        width: "100vw",
        height: "50vh",
        position: "absolute",
        bottom: "0px",
      }
    } 
    >
      <div align="center">
      <img
                  alt="blog photo"
                  src={"http://localhost:8080/images/" + partyData.data.image_id}
                  className="max-h-40 w-40 object-cover"
                />
      <h1>Party Id- {partyData.data.Party_id}</h1>
      <h1>Party name-{partyData.data.Party_name}</h1>
      <h1>Host Name- {partyData.data.First_name} {partyData.data.Last_name}</h1>
      <h1>Start Time- {partyData.data.Start_time}</h1>
      <h1>End Time- {partyData.data.End_time}</h1>
      <h1>Lane- {partyData.data.Lane_apt}</h1>
      <h1>City- {partyData.data.City}</h1>
      <h1>State- {partyData.data.State}</h1>
      <h1>Country- {partyData.data.Country}</h1>
      <h1>Interested people- {partyData.data.interested_people}</h1>
      </div>
          {/* <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAPirDDFz7WN4fP83viAvaBhVTQr6t0i7A`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}

    </div>
  }
</>

  );

  
}


export default PartyDetail;
