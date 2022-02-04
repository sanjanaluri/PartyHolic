import "../index.css";
import EventsContext from "../context/EventsContext";
import { useContext } from "react";

function ListingParties() {
  const { eventsList } = useContext(EventsContext);
  console.log(eventsList)
  return (
    <section>
      {eventsList.parties.map((partyData) => {
        return (
          <div className="categoryListing"  key={partyData.id}>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-40 md:w-80 cursor-pointer m-auto">
              <a href="#" className="w-full block h-full">
                <img
                  alt="blog photo"
                  src={"http://localhost:8080/images/" +partyData.image_id}
                  className="max-h-40 w-full object-cover"
                />
                <div className="bg-white dark:bg-gray-700 w-full p-4">
                  <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {partyData.title}
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    Distance: {partyData.distance_miles + " miles away"}
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    Host: {partyData.host_name}
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    Alochol: {partyData.alcohol? "Yes" : "No"}
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    Age over18: {partyData.over_18? "Yes": "No"}
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    People Interested: {partyData.interested_people}
                  </p>
                  {/* <div className="flex flex-wrap justify-starts items-center mt-4">
                    <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                      #Free
                    </div>
                    <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                      #BringYourOwnBooze
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ListingParties;
