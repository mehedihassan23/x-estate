import React from 'react'
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

import "./Contact.css"

const Contact = () => {
  return (
     <section className='contact'>
         <h1 className="contact-heading">Contact Us</h1>
        
         <div className="contact-container">
           
            <div className="address">
                
                 <div className="address-box">
                    <div className="icon-box">
                        <FaPhone style={{color: "crimson", textAlign: "center", fontSize: "1.5rem"}} />
                    </div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>+1-951-659-0216</p>
                    </div>
                 </div>

                 <div className="address-box">
                    <div className="icon-box">
                        <FaMailBulk style={{color: "crimson", textAlign: "center", fontSize: "1.5rem"}}/>
                    </div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>xeastate@gmail.com</p>
                    </div>
                 </div>

                 <div className="address-box">
                    <div className="icon-box">
                        <FaHome style={{color: "crimson", textAlign: "center", fontSize: "1.5rem"}}/>
                    </div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>San Francisco, California, USA</p>
                    </div>
                 </div>
                
            </div>


              <div className="contact-form">
                  <form >
                      <div className="contact-box">
                          <input type="text" required />
                          <span>Enter your name</span>
                      </div>
                      <div className="contact-box">
                          <input type="text" required />
                          <span>Enter your email</span>
                      </div>
                      <div className="contact-box">
                          <textarea ></textarea>
                          <span>Write your message</span>
                      </div>
                      <button className='btn'>Send Message</button>
                  </form>
              </div>
         </div>
     </section>
  )
}

export default Contact
