import React from "react";
import { useEffect, useState } from "react";
import ListingParties from "../components/ListingParties";
import { Modal, Button } from "react-bootstrap";
import Addform from "../components/AddFrom";

function PartyList() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="category container">
        <div className="pt-20 mb-3.5">
          <button
            onClick={handleShow}
            class="ml-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Button
          </button>
        </div>
        <div>
          <ListingParties />
        </div>
      </div>

      {show && (
        <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
          <div class="bg-white px-16 py-14 rounded-md text-center">
            <Addform />
            <button t onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PartyList;
