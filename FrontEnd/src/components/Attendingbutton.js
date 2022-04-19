import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function AttendingButton() {
  const { partyId } = useParams();
  const pId=parseInt(partyId);
  function attendPartyHandler(event){
    event.preventDefault();
    console.log("hi");
    console.log(partyId);
    const attendData = {
      user_id:3,
      party_id : pId
    }

    fetch('http://localhost:8080/api/attendParty',  {
    method:'POST',
    headers:{ 'Content-Type':'appplication/json'},
    body:JSON.stringify(attendData)
  }
  )
  }

  return (
    <>
    <form onSubmit={attendPartyHandler}>
      <div>
        <button type="submit" className=" bg-purple-500 hover:bg-purple-400 hover:text-purple-700 font-semibold text-white ">
          Attend it
        </button>
        
      </div>
      </form>
    </>
  );
}

export default AttendingButton;