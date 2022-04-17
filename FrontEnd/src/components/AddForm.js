import { Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import React from "react";

function AddForm(props) {
  // const [formData, setFormData] = useState({});

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitted");
  // };

  const titleInputRef = useRef();
  const tagsInputRef = useRef();
  const descInputRef = useRef();
  const startInputRef = useRef();
  const endInputRef = useRef();
  const addrInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const stateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredTag = tagsInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredStart = startInputRef.current.value;
    const enteredEnd = endInputRef.current.value;
    const enteredAddr = addrInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredState = stateInputRef.current.value;

    console.log("submitted");

    const addPartyData = {
      Party_name: enteredTitle,
      Host_id: 2,
      Tags: enteredTag,
      Description: enteredDesc,
      Start_time: enteredStart,
      End_time: enteredEnd,
      Lane_apt: enteredAddr,
      City: enteredCity,
      State: enteredState,
      Country: enteredCountry,
    };

    console.log(addPartyData);
    props.onAddParty(addPartyData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="party_title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Party Name
                </label>
                <input
                  type="text"
                  name="Party_name"
                  id="Party_name"
                  ref={titleInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div> 

              <div className="col-span-6">
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tags
                </label>
                <input
                  type="text"
                  id="Tags"
                  name="Tags"
                  ref={tagsInputRef}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="Description"
                  id="Description"
                  ref={descInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="start_time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Time
                </label>
                <input
                  type="text"
                  placeholder="Ex: Jan 2, 2006 3:04 pm"
                  name="Start_time"
                  id="Start_time"
                  ref={startInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="end_time"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Time
                </label>
                <input
                  type="text"
                  name="End_time"
                  id="End_time"
                  placeholder="Ex: Jan 3, 2006 3:04 pm"
                  ref={endInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Lane_apt"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  name="Lane_apt"
                  id="Lane_apt"
                  ref={addrInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="City"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="City"
                  id="City"
                  ref={cityInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="State"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  name="State"
                  id="State"
                  ref={stateInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="Country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="Country"
                  id="Country"
                  ref={countryInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div
            className="px-4 py-3 bg-gray-50 text-right sm:px-6"
            role="dialog"
          >
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
