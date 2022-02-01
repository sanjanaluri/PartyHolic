import React from 'react';
import Image2 from "../assets/Image2.jpg";

function ListingParties(){
    const partyDataa=[
        {
          id:'1',
          title:'ABC Party',
          img:'src/assets/Image1.jpg";',
          hostname:'Ravi',
          distance:'0.6 miles away',
          count:'20'
        },
        {
          id:'2',
          title:'HouseParty',
          img:'src/assets/Image1.jpg";',
          hostname:'John',
          distance:'0.2 miles away',
          count:'50'
        },
        {
          id:'3',
          title:'All Night Party',
          img:'src/assets/Image1.jpg";',
          hostname:'Lisa',
          distance:'0.1 miles away',
          count:'10'
        },
      ];

      
      return(
        <section>
        { partyDataa.map((partyData) => {
       return (<li className='categoryListing' key={partyData.id}>
        <img
          src={Image2}
          className='categoryListingImg'
        />
        <div className='categoryListingDetails'>
        <p className='categoryListingName'>{partyData.title}</p>
          <p className='categoryListingLocation'>{partyData.distance}</p>
          <p className='categoryListingLocation'>Host : {partyData.hostname}</p>
          <div className='categoryListingInfoDiv'>  
            <p className='categoryListingInfoText'>
            Count : {partyData.count}
            </p>
          </div>
        </div>
    </li>)
    
        }
  )
     
}
</section>
      )
}


export default ListingParties;