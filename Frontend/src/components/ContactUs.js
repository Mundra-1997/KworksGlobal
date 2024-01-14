import React from 'react'
import './Contact.css'
import co from '../src/public/image/conatcUs.png'
const ContactUs = () => {
  return (
    <div className='wrapper'>
      <div className='div1'>
        <div className='icon'><img src={co}></img></div>
        <h1 className='hero-head'>Contact Us</h1>
        <p className='hero-para'>Talk to us to see what running a business is like with Us on your side.</p>
      </div>
      <div className='div2'>
        <div className='book'>
            <form> 
            <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
       
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
         
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
