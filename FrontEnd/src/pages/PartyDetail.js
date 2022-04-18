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
import AttendingButton from "../components/Attendingbutton";
import moment from "moment";
import localization from "moment/locale/es"

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
      defaultZoom={13}
      defaultCenter={{ lat: 29.65390387443377, lng: -82.33607669256983 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{
          lat: partyData.data.Latitude,
          lng: partyData.data.Longitude,
        }}
        onClick={() => {
          setSelectedPark(true);
          console.log(selectedPark);
        }}
      />

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(false);
          }}
          position={{
            lat: partyData.data.Latitude,
            lng: partyData.data.Longitude,
          }}
        >
          <div>
            <h2>{partyData.data.First_name}</h2>
            <p>This is my Party</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

function PartyDetail(props) {
  const { partyId } = useParams();
  console.log(partyId);

  const [partyData, setPartyData] = useState(null);
  const [partyIdFetched, setPartyIdFetched] = useState(false);
  let MapWrapped;
  function showDetails() {
    useEffect(() => {
      fetch(`http://localhost:8080/api/getParty/${partyId}`, {
        method: "GET",
        headers: { "Content-Type": "appplication/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.data);
          setPartyData(data);
          setPartyIdFetched(true);
        });
    }, []);
  }

  showDetails();
  MapWrapped = withScriptjs(withGoogleMap(() => Map(partyData)));
  return (
    <>
      {partyIdFetched && (
        <div>
          <div
            className="grid grid-cols-2 mt-0 mb-10"
            style={{
              width: "100%",
              height: "60vh",
            }}
          >
            <div>
              <img
                alt="blog photo"
                src={"http://localhost:8080/images/" + partyData.data.image_id}
                className="object-fill w-full"
              />
            </div>
            <div>
              <div align="center">
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Party Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {partyData.data.Party_name}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Host Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {partyData.data.First_name}{" "}
                  {partyData.data.Last_name}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Start Time
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  { moment(partyData.data.Start_time).add(5, "hours")
                  .locale("en", localization)
                  .format('MMMM Do YYYY, h:mm:ss a')}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    End Time
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {moment(partyData.data.End_time).add(5, "hours")
                  .locale("en", localization)
                  .format('MMMM Do YYYY, h:mm:ss a')}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {partyData.data.Lane_apt}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    City
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {partyData.data.City}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    State
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {partyData.data.State}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Country
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {partyData.data.Country}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Intrested People
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {partyData.data.interested_people}
                  </dd>
                </div>

                <div className="bg-gray-50 px-30 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6">
                  
                  <AttendingButton/>
                  
                </div>
                
              </div>
              
            </div>
          </div>
          
          <div
            style={{
              width: "100%",
              height: "40vh",
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
        </div>
      )}
    </>
  );
}

export default PartyDetail;
