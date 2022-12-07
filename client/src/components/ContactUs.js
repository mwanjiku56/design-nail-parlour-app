import React from 'react'
import './ContactUs.css'
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <h1 id='us'>Contact Us</h1>
      <div className='row'>
        <h2>Feedback</h2>
        <br />
        <p>
          We value our customer's feedback. Feel free to leave us a Review as well. This helps us to better our services
        </p>
      </div>
      <div className='row'>
        <h2>Address</h2>
        <br />
        <p>
          We are located along Kiambui Street, Lobwe Plaza. We also offer home services within Nairobi
        </p>
      </div>
      <div className='row'>
        <h2>Contacts</h2>
        <br />
        <p>
        <i className='fa-solid fa-phone' /> 0728292882288
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> bestnailparlour@goole.com
        </p>
      </div>
      <div className='review'>
      <Link to="/review">
          <button type="button">Leave Us a Review</button>
        </Link>
      </div>
    </div>
    
  )
}

export default ContactUs
