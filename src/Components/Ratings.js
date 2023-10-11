import React from 'react'
import "./Rating.css";
const Ratings = () => {
  return (
    <div className='rating'>
        <div className='rating2'>
             <div className='googlerating'>
                <div className='ratingscontent'>
               <h6>Google Rating</h6>
               </div>
               <div className='ratings7'>
                <h1>5 *</h1>
                </div>
             </div>
             <div className='googlerating'>
             <div className='ratingscontent'>
               <h6>Business Category served</h6>
               </div>
               <div className='ratings7'></div>
               <h1>33</h1>
               </div>
               <div className='googlerating'>
             <div className='ratingscontent'>
               <h6>Active Client</h6>
               </div>
               <div className='ratings7'></div>
               <h1>211</h1>
               </div>
             </div>
            
             
            </div> 

  )
}

export default Ratings;