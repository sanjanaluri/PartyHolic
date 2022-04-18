import React from "react";
import { useEffect, useState } from "react";
import ListingParties from "../components/ListingParties";
import { Modal, Button } from "react-bootstrap";
import AddForm from "../components/AddForm";
import props from 'prop-types';
import moment from "moment";

function PartyList() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function addPartyHandler(addPartyData){
    fetch('http://localhost:8080/api/newParty',  {
    method:'POST',
    headers:{ 'Content-Type':'appplication/json'},
    body:JSON.stringify(addPartyData)
  }
  ).then(res =>{
    return res.json();
  }).then(data =>{
    console.log(data)
    console.log("yess")
  })
  }

  return (
    <>
      <div className="category container mx-auto px-auto mt-0">
        <div className="pt-20 mb-3.5 mt-0">
          <button
            onClick={handleShow}
            class="ml-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Add Event
          </button>
        </div>
        <div>
          <ListingParties />
        </div>
      </div>

      {show && (
        <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute  top-0 right-0 bottom-0 left-0">
          <div class="bg-white rounded-md text-center mt-20 py-3" > 
            <AddForm  onAddParty={addPartyHandler}/>
            <button
              
              onClick={handleClose}
              type="button"
              class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PartyList;
