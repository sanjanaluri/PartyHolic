import React from "react";
import { useNavigate } from "react-router-dom";

function LandingStyle() {
  const navigate = useNavigate(); 
    const routeChange1 = () =>{ 
        let path1 = `/partylist`; 
        navigate(path1);
      }
    const routeChange2 = () =>{ 
      let path2 = `/sign-in`; 
      navigate(path2);
    }
  return (
    <>
      <div className="container mt-15">
        <img
          src="assets/127045.jpg"
          alt="rent"
          className="object-cover w-screen h-screen blur-xs"
        />
        <div className="cont-text">
          <span className="text1">Welcome</span>
          <span className="text2">into amazing experiences</span>
        </div>
        <button className="cont-btn1  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={routeChange1}>
          Attend an Event
        </button>
        <button className="cont-btn2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={routeChange2}>

          Host an Event
        </button>
      </div>
    </>
  );
}

export default LandingStyle;
