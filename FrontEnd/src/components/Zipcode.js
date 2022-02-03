import { useState } from "react";

function ZipCode(props){
    const [zipcode, setZipCode] = useState('')
    function handleCodeChange(event){
        setZipCode(event.target.value)
      };

    function submitHandler(event){
        event.preventDefault();
        alert(`Entered zip code is ${zipcode}`);
        fetch('https://postman-echo.com/get',
        {
            method:'POST',
            body:JSON.stringify({zipcode}),
            headers:{ 'Content-Type':'appplication/json'}   
                
        }
        )
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
  };

        return (<div class="modal">
            <form onSubmit={submitHandler}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Enter your zip code: </h5>
            </div>
            <div class="modal-body">
            <input type="text" required id="code" name="zipcode" placeholder="eg. 32608" onChange={handleCodeChange} value={zipcode}/>
            </div>
            <div class="modal-footer">
              <button type="button" class="button" onClick={props.onEnter}>Save </button>
            </div>
          </div>
          </form>
        </div>
      );
}

export default ZipCode;
