import "../index.css";

function ListingParties() {
  const partyDataa = [
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
  ];

  return (
    <section>
      {partyDataa.map((partyData) => {
        return (
          <div className="categoryListing " key={partyData.id}>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="#" className="w-full block h-full">
                <img
                  alt="blog photo"
                  src={partyData.img}
                  className="max-h-40 w-full object-cover"
                />
                <div className="bg-white dark:bg-gray-700 w-full p-4">
                  <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {partyData.title}
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    Distance: {partyData.distance}
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    Host: {partyData.hostname}
                  </p>
                  <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    People Interested: {partyData.count}
                  </p>
                  <div className="flex flex-wrap justify-starts items-center mt-4">
                    <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                      #Free
                    </div>
                    <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                      #BringYourOwnBooze
                    </div>
                  </div>
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
