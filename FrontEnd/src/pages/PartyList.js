import React from 'react';
import { useEffect, useState } from 'react'
import  ListingParties  from '../components/ListingParties';

function PartyList() {
    
    return (
      <div className='category'>
        <header>
          <p className='pageHeader'>Parties Around you </p>
        </header>
            <main>
              <ul className='categoryListings'>
                  <ListingParties/> 
              </ul>
            </main>
      </div>
    )
  }
  

export default PartyList;
