import React from "react";
import { useNavigate } from "react-router-dom";

function AttendingButton() {
  
  return (
    <>
      <div>
        <button className=" bg-purple-500 hover:bg-purple-400 hover:text-purple-700 font-semibold text-white ">
          Attend it
        </button>
        
      </div>
    </>
  );
}

export default AttendingButton;