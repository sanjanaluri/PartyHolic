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
              <div>
                  <ListingParties/> 
              </div>
            </main>
      </div>
    )
  }
  

export default PartyList;
