import React, { createContext, useState, useEffect, useContext } from "react";

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [eventsList, setEventsList] = useState(null);
  // const [selectedParty, setSelectedParty] = useState(
  //   {
  //     set: partyID => {
  //       console.log("hello there " + partyID)
  //       setGotPartyId(true)
  //       console.log(gotPartyId)
  //     }
      
  //   }
  // )
  const [gotPartyId, setGotPartyId] = useState(false);
  const [gotLocation, setGotLocation] = useState(false);
  const [coordinates, setcoordinates] = useState({
    user_id: "1",
    location: {
      latitude: parseInt(""),
      longitude: parseInt(""),
    },
    radius_meters: 50,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setcoordinates((prevState) => {
        return {
          ...prevState,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        };
      });
      setGotLocation(true);
      console.log(coordinates.location.latitude);
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/parties", {
      method: "POST",
      headers: { "Content-Type": "appplication/json" },
      body: JSON.stringify(coordinates),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEventsList(data);
      });
  }, [gotLocation]);

  
    // useEffect(() => {
    //   if (gotPartyId) {
    //   fetch(`http://localhost:8080/api/getParty/${partyID}`, {
    //     method: "GET",
    //     headers: { "Content-Type": "appplication/json" },
    //   })
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log("hi")
    //       console.log(data);
    //       setPartyData(data);
    //     });
    //   }
    // },[]);
  


  return (
    <EventsContext.Provider value={{ eventsList }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
