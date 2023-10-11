import React from 'react'
import "./Youtubesection.css";
import ReactPlayer from 'react-player'


const Youtubesection = () => {
  return (
    <div className='youtube-section'>
    <div className='link'>
     <ReactPlayer url='https://youtu.be/on4rXoXbTw0?si=jozMM2nL-5y4UX5B' width="700px" height="300px" />
     
     </div>
        
    </div>
  )
}

export default Youtubesection;