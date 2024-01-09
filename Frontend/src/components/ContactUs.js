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
            <form> </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
