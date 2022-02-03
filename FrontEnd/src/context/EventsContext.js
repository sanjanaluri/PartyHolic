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
    {
      id: "2",
      title: "HouseParty",
      img: "assets/Image2.jpg",
      hostname: "John",
      distance: "0.2 miles away",
      count: "50",
    },
    {
      id: "3",
      title: "All Night Party",
      img: "assets/Image3.jpg",
      hostname: "Lisa",
      distance: "0.1 miles away",
      count: "10",
    },
    {
      id: "4",
      title: "ABC Party",
      img: "assets/Image4.jpg",
      hostname: "Ravi",
      distance: "0.6 miles away",
      count: "20",
    },
    {
      id: "5",
      title: "HouseParty",
      img: "assets/Image5.jpg",
      hostname: "John",
      distance: "0.2 miles away",
      count: "50",
    },
    {
      id: "6",
      title: "All Night Party",
      img: "assets/Image6.jpg",
      hostname: "Lisa",
      distance: "0.1 miles away",
      count: "10",
    },
    {
      id: "7",
      title: "ABC Party",
      img: "assets/Image7.jpg",
      hostname: "Ravi",
      distance: "0.6 miles away",
      count: "20",
    },
    {
      id: "8",
      title: "HouseParty",
      img: "assets/Image8.jpg",
      hostname: "John",
      distance: "0.2 miles away",
      count: "50",
    },
    {
      id: "9",
      title: "All Night Party",
      img: "assets/Image9.jpg",
      hostname: "Lisa",
      distance: "0.1 miles away",
      count: "10",
    },
  ]);

  return (
    <EventsContext.Provider value={{eventsList}}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
