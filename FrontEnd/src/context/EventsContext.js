import React, { createContext, useState, useEffect, useContext } from "react";

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [eventsList, setEventsList] = useState(null);
  const [partyDetail, setPartyDetail] = useState(null);
  const[selectedParty, setSelectedParty] = useState("");
  const[gotLocation, setGotLocation] = useState(false)
  const [coordinates, setcoordinates] = useState({
	user_id: '1',
  location: {
  	latitude: parseInt(''),
    longitude: parseInt('')
   },
  radius_meters: 50
});

useEffect(() => {
  navigator.geolocation.getCurrentPosition(function (position) {
    
    setcoordinates((prevState) => {
      return {
        ...prevState,
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      };
    });
    setGotLocation(true);
    
  });
}, []);



useEffect(() => {
  fetch('http://localhost:8080/api/parties',  {
    method:'POST',
    headers:{ 'Content-Type':'appplication/json'},
    body:JSON.stringify(coordinates)
}
).then(res =>{
    return res.json();
  }).then(data =>{
    console.log(data)
    setEventsList(data);
  })
},[gotLocation]);


// useEffect(() => {

//   fetch(`http://localhost:8080/api/getParty/${partyDetail.party_id}`,  {
//     method:'GET',
//     headers:{ 'Content-Type':'appplication/json'},
//     body:JSON.stringify(partyDetail)
// }
// ).then(res =>{
//     return res.json();
//   }).then(data =>{
//     console.log(data)
//     setPartyDetail(data);
//   })
// },[]);


  return (
    <EventsContext.Provider value={{eventsList}}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
