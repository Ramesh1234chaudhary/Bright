import React from 'react'
import "./Footer.css";
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <div className='logo4'>
                        <img src='./log 8.png' style={{ width: "200px" }} />
                    </div>
                    <div className='footer-left-content'>
                        <p>We provide efficient billing and inventory <br /> management
                            software services for small <br /> and medium-sized enterprises
                            (SMEs). We <br /> are excited to connect with you and answer<br />
                            any questions you may have about our <br />services.</p>
                    </div>
                </div>
                <div className='footer-middle'>
                    <div className='footer-middle-heading'>
                        <h5>Keep in Touch with</h5>
                    </div>
                    <div className='content5'>
                        <div className='facebook'>
                            <div className='facebook-img'>
                                <a href='https://www.facebook.com/brightsolution.in'>
                                    <img src="./face.png" style={{
                                        width: "30px", height: "20px"
                                        , marginTop: "3px"
                                    }} /></a>
                            </div>
                            <div style={{ marginBottom: "10px" }}> <span style={{
                                color: "#fefefe", fontSize: "10px",
                                marginLeft: "10px"
                            }}>Like us on Facebook</span>
                            </div>
                        </div>

                        <div className='facebook'>
                            <div className='facebook-img'>
                                <img src="./insta.png" style={{ width: "30px", height: "20px", marginTop: "3px" }} />
                            </div>
                            <div style={{ marginBottom: "10px" }}> <span style={{
                                color: "#fefefe", fontSize: "10px",
                                marginLeft: "10px"
                            }}>Follow us on Instagram</span>
                            </div>
                        </div>

                        <div className='facebook'>
                            <div className='facebook-img'>
                                <img src="./watsaap.png" style={{ width: "30px", height: "20px", marginTop: "3px" }} />
                            </div>
                            <div style={{ marginBottom: "10px" }}> <span style={{
                                color: "#fefefe", fontSize: "10px",
                                marginLeft: "10px"
                            }}>Chat on WhatsApp</span>
                            </div>
                        </div>
                        <div className='facebook'>
                            <div className='facebook-img'>
                                <a href='https://www.linkedin.com/in/bright-solution-251543143/'>  <img src="./lindin.png" style={{
                                    width: "30px", height: "20px",
                                    marginTop: "3px"
                                }} /></a>
                            </div>
                            <div style={{ marginBottom: "10px" }}> <span style={{
                                color: "#fefefe", fontSize: "10px",
                                marginLeft: "10px"
                            }}>Connect on Linkedin</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='footer-right'>
                    <div className='footer-right-heading'>
                        <h6 style={{ color: "#fefefe" }}>Contact Information</h6>
                    </div>
                    <div className='footer-right-content'>
                        <div className='contentright1' style={{marginTop:"10px"}}>
                            <div className='right-image'>
                                <img src='./add3.png' style={{ width: "30px", height: "20px",
                                 marginTop: "3px",marginRight:"10px" }} />
                            </div>
                            <div className='add'>
                                <span style={{ color: "#fefefe",fontSize: "14px",fontSize: "14px" }}>Bright Solutions</span>
                                <span style={{ color: "#fefefe", fontSize: "10px", marginLeft: "10px",paddingBottom:"5px" }}> 207, Gosaliya Park, Tarapur Road Near S T Depo, Opp.
                                    Ostwal Empire, Boisar, Maharashtra 401501</span>
                            </div>
                        </div>

                        <div className='contentright1' style={{marginTop:"10px"}}>
                            <div className='right-image'>
                                <img src='./smartphone.png' style={{ width: "30px", height: "20px",
                                 marginTop: "3px",marginRight:"10px" }} />
                            </div>
                            <div className='add'>
                                <span style={{ color: "#fefefe",fontSize: "14px" }}>+91-9511-655-951 </span> 
                                <span style={{ color: "#fefefe", fontSize: "10px", marginLeft: "10px" }}>
                                    Mon-Sat 10am-7pm</span>
                            </div>
                        </div>

                        <div className='contentright1' style={{marginTop:"10px"}}>
                            <div className='right-image'>
                                <img src='./enquiry.png' style={{ width: "30px", height: "20px",
                                 marginTop: "3px",marginRight:"10px" }} />
                            </div>
                            <div className='add'>
                                <span style={{ color: "#fefefe" ,fontSize: "14px"}}>enquiry@munim-ji.com </span> 
                                <span style={{ color: "#fefefe", fontSize: "10px", marginLeft: "10px" }}>
                                    Mon-Sat 10am-7pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
             <div className='bottom-footer'>
                 <div className='copyright'>
                     <span style={{color:"#FFFFFF", fontSize:"10px", paddingTop:"9px"}}>© Copyright @Bright Solutions 2023.</span>
                    </div> 
             </div> 
        </div>
    )
}

export default Footer;