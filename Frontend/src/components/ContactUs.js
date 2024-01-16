import React from 'react'
import './Contact.css'
import co from '../image/contact.png'
const ContactUs = () => {
  return (
    <div className='wrapper'>
      <div className='div1'>
        {/* <div className='icon'><img src={co}></img></div> */}
        <h1 className='hero-head'>Book a Free Consultation</h1>
        <p className='hero-para'>Talk to us to see what running a business is like with FinTeam<br/> on your side.</p>
        <p>Drop us email at :<b> pchanduraj@finteam.one</b></p>
      </div>
      <div className='div2'>
        <div className='book'>
            <form> 
         
        <input
          type="text"
          id="name"
          placeholder='Name'
          name="name"
          className='nameinput'
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          required
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder='Contact Number'
          required
        />
  <input
          type="text"
          id="compnayname"
          placeholder='Company Name (optional)'
          name="name"
          className=''
          required
        />
       
        <textarea
          id="message"
          name="message"
          placeholder='Message'
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
