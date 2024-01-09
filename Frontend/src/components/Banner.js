import React, { useState } from 'react';
// import ContactModal from './ContactModal';
import './Banner.css'
import 'animate.css';
import kco from '../image/headline.svg'
const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    
      <div className='banner-div'>
         <div className='banner-heading'>
          <h1>We work the numbers,<br/> so you can do<br/> Wonders! </h1 >
          <p>Unleash your companies potential with agility and expertise. Outsource. Outshine. <span> FinTeam </span> replaces your finance function with lean, data-driven excellence delivering world class financial management services.
          </p>
          <button onClick={openModal}>Contact Us</button>
</div>
<div className='img-div'><img src={kco} alt='scg'></img></div>

</div>

      
    
  )
}

export default Banner
