import React, { useState } from 'react';
// import ContactModal from './ContactModal';
import './Banner.css'
import 'animate.css';

import kco from '../image/headline.svg'
import { useNavigate } from "react-router-dom";
const Banner = () => {
 const navigate = useNavigate()
  return (
      <div className='main-div'>
      <div className='banner-div'>
         <div className='banner-heading'>
          <p className='main-heading'>We work the numbers,<br/> so you can do<br/> Wonders! </p>
          <p className='sub-heading'>Unleash your companies potential with agility and expertise. Outsource. Outshine. <span> FinTeam </span> replaces your finance function with lean, data-driven excellence delivering world class financial management services.
          </p>
          <button onClick={()=>navigate('/contact-us')}>Contact Us</button>
</div>
<div className='img-div'><img src={kco} alt='scg'></img></div>

</div>
</div>
      
    
  )
}

export default Banner
