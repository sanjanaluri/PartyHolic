import { data } from "autoprefixer";
import { useState } from "react";
import React from "react";

function ZipCode(props){
    const [zipcode, setZipCode] = useState('')
    function handleCodeChange(event){
      
        setZipCode(event.target.value);
      };

    function submitHandler(event){
        event.preventDefault();
        const zip={zipcode};
        alert(`Entered zip code is ${zipcode}`);
        console.log(zip);
        fetch('http://localhost:5000/zipCodeList',
        {
            method:'POST',
            headers:{ 'Content-Type':'appplication/json'},
            body:JSON.stringify({"zipcode":zipcode})
        }
        )
        .then(response => console.log("hi " , response.json()))
        .then( data => console.log("i got here"))
        .then(() => {
          console.log('Submitted successfully');
        })
  };

        return (<div className="modal">
            <form onSubmit={() => {}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enter your zip code: </h5>
            </div>
            <div className="modal-body">
            <input type="text" required id="code" name="zipcode" placeholder="eg. 32608" onChange={handleCodeChange} value={zipcode}/>
            </div>
            <div className="modal-footer">
              <button t>Save</button>
            </div>
          </div>
          </form>
        </div>
      );
}

export default ZipCode;