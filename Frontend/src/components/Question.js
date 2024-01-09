import React from 'react'
import f9 from '../../src/image/question.png'
import './Question.css'
const Question = () => {
  return (
    <div className='question'>
      <div className='questions'> <div className='divq div1'><span>Are you tired of struggling to find skilled finance professionals?</span></div>
      <div className='divq div2'><span>Is your in-house team drowning in tasks and lacking strategic foresight?</span></div></div>
       <div className='imgdiv'><img src={f9} alt='qs'></img>
      </div>
      <div className='questions'>
     
      <div className='divq div3'><span>Is your financial department a bottleneck hindering your growth?</span></div>
      <div className='divq div4'><span>Bogged down with sales calls to evaluating tools and implementing them?</span></div>
      </div>
       
    </div>
  )
}

export default Question
