import React from 'react';
import { useEffect, useState } from 'react'
import  ListingParties  from '../components/ListingParties';

function PartyList() {
    
    return (
      <div className='category'>
              <div>
                  <ListingParties/> 
              </div>
      </div>
    )
  }
  

export default PartyList;
