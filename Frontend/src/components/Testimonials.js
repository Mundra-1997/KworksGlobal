import React from 'react'
import './Testimonial.css'
import 'animate.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const Testimonials = () => {
  return (
    <div className='main-test'>
      <AnimatedOnScroll
                animationIn="bounceInRight" >
      <div className='test'>
      
       <div className='feedback'><p className='feedbackpara'><span className='comma'>" </span> 
       Protom International engaged FinTeam to come in and put processes 
       in place that the company desperately needed to allow us to move forward in an
        organized fashion and helping us to better understand our pricing model and business exposure. 
        FinTeam quickly exceeded our expectations and have allowed us to focus on priorities outlined by
         their detailed review and plan for our ongoing operational and revenue needs.
          I would highly recommend FinTeam to any organization that wants to optimize their performance, 
           create accountability, and be a strategic partner to their business.
       <span className='comma'> "</span></p></div>
        <div className='author'><span>- Bill Behnke </span><span>CEO, The Behnke Group</span></div>
      
        </div>
        </AnimatedOnScroll>
    </div>
  )
}

export default Testimonials
