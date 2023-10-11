import React from 'react'
import "./Price.css"
const Price = () => {
  return (
    <div className='price'>
        <div className='price-header'>
       <h2 style={{color:"#323645"}}>Software Product price</h2>
     <span style={{color:"#323645", fontSize:"12px"}}>Different products comes with different features as per business or industry requirement</span>
     </div>

        <div className='pricing'>
           <div className='pricing-content'>
           <div className='pricing-main'> 
           <span style={{fontSize:"11px", color:"#fefefe",fontWeight:"500"}}>MunimJi Software</span>
            <h1>9,900/-</h1>
            <span style={{fontSize:"10px",color:"#fefefe",fontWeight:"500"}}>Per installation</span>
           </div>
           <div className='pricing-main'> 
           <span style={{fontSize:"11px",color:"#fefefe",fontWeight:"500"}}>MunimJi for Reatil</span>
            <h1 >14,900/-</h1>
            <span style={{fontSize:"10px",color:"#fefefe",fontWeight:"500"}}>Per installation</span>
           </div>
           <div className='pricing-main'> 
           <span style={{fontSize:"11px",color:"#fefefe",fontWeight:"500"}}>MunimJi for maufacturing</span>
            <h1>24,900/-</h1>
            <span style={{fontSize:"10px",color:"#fefefe",fontWeight:"500"}}> On requirement Per installation</span>
           </div>
           </div>
        </div>
        <div className='price-content'>
       <div className='first-price'>
         <span style={{paddingRight:"100px"}}>Offline Software</span>
           <img src='./tick.png' style={{width:"20px",height:"20px",}}/>
           <img src='./tick.png' style={{width:"20px",height:"20px", }}/>
           <img src='./tick.png'  style={{width:"20px",height:"20px"}}/>
       </div>
       <div className='first-price' style={{backgroundColor:"#fff",width:"80%"}}>
         <span style={{paddingRight:"100px"}}>Manage Accounts</span>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png'  style={{width:"20px",height:"20px"}}/>
       </div>
       <div className='first-price' >
         <span style={{paddingRight:"100px"}}>Manage Invoicing</span>
           <img src='./tick.png' style={{width:"20px",height:"20px",}}/>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png'  style={{width:"20px",height:"20px"}}/>
       </div>
       <div className='first-price' style={{backgroundColor:"#fff",width:"80%"}}>
         <span style={{paddingRight:"100px"}}>Manage inventory</span>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png'  style={{width:"20px",height:"20px"}}/>
       </div>
       <div className='first-price'>
         <span style={{paddingRight:"100px"}}>Reports && Notification</span>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png'  style={{width:"20px",height:"20px"}}/>
       </div>
       <div className='first-price' style={{backgroundColor:"#fff",width:"80%"}}>
         <span style={{paddingRight:"100px"}}>Barcode Label Printing</span>
           <img src='./whitetick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png'  style={{width:"20px",height:"20px"}}/>
       </div>
       <div className='first-price' >
         <span style={{paddingRight:"100px"}}>Industry Specific Features</span>
           <img src='./whitetick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png'  style={{width:"20px",height:"20px"}}/>
       </div>
       <div className='first-price' style={{backgroundColor:"#fff",width:"80%"}}>
         <span style={{paddingRight:"100px"}}>Manage Production</span>
           <img src='./whitetick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./whitetick.png' style={{width:"20px",height:"20px"}}/>
           <img src='./tick.png'  style={{width:"20px",height:"20px"}}/>
       </div>
      </div>
      <div className='main-button'>
        <div className='buttontwo'>
          <button style={{backgroundColor:"#26235C"}}>View Product</button>
          
        </div>
        <div className='buttontwo' >
          <button >View Product</button>
          
        </div>
        <div className='buttontwo'>
          <button style={{backgroundColor:"#26235C"}}>View Product</button>
          
        </div>
        </div>
    

    </div>
  )
}

export default Price;