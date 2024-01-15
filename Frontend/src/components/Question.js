import React from 'react'
import f9 from '../../src/image/question.png'
import './Question.css'
import { useNavigate } from "react-router-dom";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const Question = () => {
  const navigate = useNavigate()
  return (
    <div className='question'>
          <div className='questions'> 
          <AnimatedOnScroll
                animationIn="bounceInRight"
              
            >

<div className='divq div1'><span>Are you tired of struggling to find skilled finance professionals?</span></div>
            </AnimatedOnScroll>
          
            <AnimatedOnScroll
                animationIn="bounceInLeft"
              
            >
               <div className='divq div2'><span>Is your in-house team drowning in tasks and lacking strategic foresight?</span></div>
            </AnimatedOnScroll>
        
     </div>
     <div className='imgdiv' onClick={()=>navigate('/contact-us')}><span>See How we can help!</span>
      </div>
      <div className='questions'>
      <AnimatedOnScroll
                animationIn="bounceInRight"
              
            >
 <div className='divq div3'><span>Is your financial department a bottleneck hindering your growth?</span></div>

            </AnimatedOnScroll>
     
      
      <AnimatedOnScroll
                animationIn="bounceInLeft"
              
            >

<div className='divq div4'><span>Bogged down with sales calls to evaluating tools and implementing them?</span></div>
            </AnimatedOnScroll>
      
      </div>
       
    </div>
  )
}

export default Question
