import React from 'react'
import './Contact.css'
import co from '../image/contact.png'
const ContactUs = () => {
  return (
    <>
     <head>
      <title>Finteam - Contact Us</title>
      <meta name="Contact Us Page" content="Finteam Contact Us page - Book a Free Consultation. Talk to us to see what running a business is like with FinTeam on your side. Drop us email at info@finTeam.one" />
      <meta name="Contact Us" content="Contact Us Page of Finteam" />
    </head>
    <div className='wrapper'>
      <div className='div1'>
        {/* <div className='icon'><img src={co}></img></div> */}
        <h1 className='hero-head'>Book a Free Consultation</h1>
        <p className='hero-para'>Talk to us to see what running a business is like with FinTeam on your side.</p>
        <p className='drop'>Drop us email at :<b> info@finTeam.one</b></p>
      </div>
      <div className='div2'>
      
        <form action="https://formspree.io/f/mayrqkzz" method="POST">
         
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
    </>
  )
}

export default ContactUs
