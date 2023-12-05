import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';



const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }


    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
    })
  };

  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <section className='mainSection' >
          <div>
            <span>
              <LocationOnIcon />
              <Typography sx={{ width: '50%' }}>
                1 Broadway 14th Floor Cambridge, MA 02142
              </Typography>
            </span>
            <span>
              <CallIcon />
              <Typography sx={{ width: '50%' }}>
                <Link sx={{ textDecoration: 'none', color: 'black' }} href={`tel:${9899057643}`}>

                  (617) 249-4590
                </Link>
              </Typography>
            </span>
            <span>
              <MailIcon />
              <Typography sx={{ width: '50%' }}>
                <Link sx={{ textDecoration: 'none', color: 'black' }} href="mailto:dummy123@gmail.com">
                  dummy123@gmail.com
                </Link>
              </Typography>
            </span>
            <span>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                color="inherit">
                <FacebookIcon />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                color="inherit" >
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                color="inherit" >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                color="inherit" >
                <LinkedInIcon />
              </Link>
            </span>

          </div>
          <form onSubmit={handleSubmit}>
            <div className='inputField'>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Enter Your Name'
              />
            </div>
            <div className='inputField'>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='abc@xyz.com'
              />
            </div>
            <div className='inputField'>
              <label>Phone Number</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required placeholder='98XXXXX394' />
            </div>
            <div className='textArea'>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required placeholder='Tell us about your query...' />
            </div>
            < Button
              className='contactBtn'
              type='submit'
              variant="contained"
              sx={{ marginLeft: '17%',marginTop:'20px', backgroundColor: '#1eade4',
              '@media (max-width: 600px)': {
              marginLeft: '0%',}
              }}

              startIcon={<SendIcon />}
            >
              <span >Send</span>
            </Button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default ContactUs;