import React from "react";
import { useNavigate } from "react-router-dom";

function AttendingButton() {
  
  return (
    <>
      <div>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white ">
          Attend it
        </button>
        
      </div>
    </>
  );
}

export default AttendingButton;