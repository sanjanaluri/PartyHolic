import React, { createContext, useState, useEffect, useContext } from "react";

const PartyContext = createContext();

export const PartyProvider = ({ children }, location, id,) => {
 
  const [partyDetail, setPartyDetail] = useState(null);
  const[selectedParty, setSelectedParty] = useState("");
  
  const [coordinates, setcoordinates] = useState({
	user_id: '1',
  location: {
  	latitude: parseInt(''),
    longitude: parseInt('')
   },
  radius_meters: 50
})
  setSelectedParty(id);
  setcoordinates(location);


useEffect(() => {

  fetch(`http://localhost:8080/api/getParty/${selectedParty}`,  {
    method:'GET',
    headers:{ 'Content-Type':'appplication/json'},
    body:JSON.stringify(partyDetail)
}
).then(res =>{
    return res.json();
  }).then(data =>{
    console.log(data)
    setPartyDetail(data);
  })
},[selectedParty]);


  return (
    <EventsContext.Provider value={{partyDetail}}>
      {children}
    </EventsContext.Provider>
  );
};

export default PartyContext;
