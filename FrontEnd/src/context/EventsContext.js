import React, { createContext, useState } from "react";

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [eventsList, setEventsList] = useState([
    {
      id: "1",
      title: "ABC Party",
      img: "assets/Image1.jpg",
      hostname: "Ravi",
      distance: "0.6 miles away",
      count: "20",
    },
  ]);

  return (
    <EventsContext.Provider value={{ eventsList }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
