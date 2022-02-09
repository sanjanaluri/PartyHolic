import React from 'react';

function PartyDetail(props) {
    
    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
        <h1>PartyDetail</h1>
        <h2>t: {props.title}</h2>
      </div>
    
    )
  }
  

export default PartyDetail;