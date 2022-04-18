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
  const hostInputRef = useRef();
  const addressInputRef = useRef();
  const tagsInputRef = useRef();
  const descInputRef = useRef();
  const startInputRef = useRef();
  const endInputRef = useRef();
  const imageInputRef = useRef();
  const countInputRef = useRef();
  const latInputRef = useRef();
  const longInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredHost = hostInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredTag = tagsInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredStart = startInputRef.current.value;
    const enteredEnd = endInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredCount = countInputRef.current.value;
    const enteredLat = latInputRef.current.value;
    const enteredLong = longInputRef.current.value;

    console.log("submitted");

    const addPartyData = {
      Party_name: enteredTitle,
      Host_id: parseInt(enteredHost),
      Address_id: parseInt(enteredAddress),
      Tags: enteredTag,
      Description: enteredDesc,
      Start_time: enteredStart,
      End_time: enteredEnd,
      Image_id: enteredImage,
      Attendee_count: enteredCount,
      Latitude: parseFloat(enteredLat),
      Longitude: parseFloat(enteredLong),
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
              <div className="col-span-6 sm:col-span-3">
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

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="host_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Host Id
                </label>
                <input
                  type="text"
                  name="Host_id"
                  id="Host_id"
                  ref={hostInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="address_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address Id
                </label>
                <input
                  type="text"
                  name="Address_id"
                  id="Address_id"
                  ref={addressInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
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
                  ref={endInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  type="text"
                  name="Image_id"
                  id="Image_id"
                  ref={imageInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="attendee_count"
                  className="block text-sm font-medium text-gray-700"
                >
                  Attendee Count
                </label>
                <input
                  type="text"
                  name="Attendee_count"
                  id="Attendee_count"
                  ref={countInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="latitude"
                  className="block text-sm font-medium text-gray-700"
                >
                  Latitude
                </label>
                <input
                  type="text"
                  name="Latitude"
                  id="Latitude"
                  ref={latInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="longitude"
                  className="block text-sm font-medium text-gray-700"
                >
                  Longitude
                </label>
                <input
                  type="text"
                  name="Longitude"
                  id="Longitude"
                  ref={longInputRef}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div
            className="px-4 py-3 bg-gray-50 text-center sm:px-6"
            role="dialog"
          >
            <button
              type="submit"
              className="ml-8 bg-purple-500 hover:bg-purple-400  font-semibold py-2 px-4 border border-gray-400 rounded shadow text-white  font-semibold"
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
