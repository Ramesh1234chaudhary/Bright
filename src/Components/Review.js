import React from 'react'
import "./Review.css";
const Review = () => {
  return (
    <div className='review'>
        <div className='revie-heading'>
             <h3 style={{color:"#ffffff"}}>Customer Reviews</h3>
             <span style={{color:"#ffffff",fontSize:"11px"}}>Reviews from clients about our products and services</span>
        </div>

        <div className='reviewcard'>
        <div className='reviewstyle'>
             <h6 style={{fontSize:"13px",}}>i have been looking for a good Software for my garment shop and i found MunimJi.
             the Software has been so helpful in my businees,its saving time  and money.
             </h6>
             <div class="horizontal-line"></div>
               <h4 style={{marginTop:"20px", marginLeft:"20px"}}>SM Mobile Enterprises</h4>
               <h5 style={{ marginLeft:"20px"}}>Mobile Shop,Mumbai</h5>
        </div>
        <div className='reviewstyle'>
             <h6 style={{fontSize:"13px",}}>i have been looking for a good Software for my garment shop and i found MunimJi.
             the Software has been so helpful in my businees,its saving time  and money.
             </h6>
             <div class="horizontal-line"></div>
               <h4 style={{marginTop:"20px", marginLeft:"20px"}}>SM Mobile Enterprises</h4>
               <h5 style={{ marginLeft:"20px"}}>Mobile Shop,Mumbai</h5>
        </div>
   
       
      </div>

    </div>
  )
}

export default Review;