import React from 'react'
import "./Clients.css"
const Clients = () => {
  return (
    <div className='clients'>
    <div className=' clients-heading'>
      <h3 style={{color:"#323645"}}>Our Valuable Clients</h3>
       <span style={{color:"#323645", fontSize:"13px"}}>clients from diffrent industries with expertise in their industry</span>
    </div>
     
      <div className='containercard'>
        <div className='cardstyle'>
             <img src='./Majestic.png'/>
        </div>
        <div className='cardstyle'>
             <img src='./Majestic.png'/>
        </div>
        <div className='cardstyle'>
             <img src='./Majestic.png'/>
        </div>
        <div className='cardstyle'>
             <img src='./Majestic.png'/>
        </div>
      </div>
    </div>
  )
}

export default Clients;