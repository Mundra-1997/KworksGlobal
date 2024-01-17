import React, { useState } from 'react';
// import ContactModal from './ContactModal';
import './Banner.css'
import 'animate.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import kco from '../image/headline.svg'
import { useNavigate } from "react-router-dom";
const Banner = () => {
 const navigate = useNavigate()
  return (
    
      <div className='banner-div'>
         <div className='banner-heading'>
         <AnimatedOnScroll
                animationIn="bounceInRight" > 
          <p className='main-heading'>We work the numbers,<br/> so you can do<br/> Wonders! </p></AnimatedOnScroll>
          <AnimatedOnScroll
                animationIn="bounceInLeft" >  <p className='sub-heading'>Unleash your companies potential with agility and expertise. Outsource. Outshine. <span> FinTeam </span> replaces your finance function with lean, data-driven excellence delivering world class financial management services.
          </p></AnimatedOnScroll>
          <AnimatedOnScroll
                animationIn="bounceInLeft" >  <button onClick={()=>navigate('/contact-us')}>Contact Us</button></AnimatedOnScroll>
</div>
<div className='img-div'><img src={kco} alt='scg'></img></div>

</div>

      
    
  )
}

export default Banner
