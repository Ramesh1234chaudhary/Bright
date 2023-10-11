import React from 'react'
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero-left'>

          <h1>Welcome to MunimJi</h1>
          <h3>Unlock Your Business's Potential</h3>

          <br />
          <p>At Munimji, we believe that every MSME deserves access to top-quality<br />
            software solutions that can help them succeed. That's why we offer <br />customized billing and inventory management
            software at affordable <br /> prices.</p><br />
          <p>
            Our software is easy to use and can be tailored to meet the unique needs of your business.
            Try Munimji today and see the difference that efficient and reliable software can make. </p>
          <br />
          <div className='button'>
            <button>Get a Quote</button>
          </div>
        </div>
        <div className='hero-right'>
          
            <div className="divimg">
              <img src="./image 1.png" alt="" />
            </div>

            <div className='divimg1'>

              <img src="./man with laptop.png" alt="" />
            </div>

            <div className='divimg2'>
              <img src="./cloud upload.png" alt="" />
            </div>

            <div className='divimg3'>
              <img src="./srver.png" alt="" />
            </div>

            <div className='divimg4'>
              <img src="./rupee chatbox.png" alt="" />
            </div>
            <div className='divimg5'>
              <img src="./Graph.png" alt="" />
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Hero;