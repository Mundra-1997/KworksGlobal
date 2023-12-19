import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import capitalP from '../image/200w.webp';
import Divider from '@mui/material/Divider';
import passion from '../image/passion.jpg'
import partnership from '../image/partnership.jpg'
import professionalism from '../image/professionalism.jpg'
import performance from '../image/performance.jpg'
import 'animate.css';
import './Values.css'
const Values = () => {
  const data = [
    {
      title: "Professionalism",
      des: `Upholding high standards of conduct, 
      ethics, and integrity in all interactions and endeavors,
      and demonstrating a commitment to excellence`,
      img:professionalism
    },
    {
      title: "Partnership",
      des: `Valuing and nurturing collaborative 
      relationships with others, fostering teamwork, cooperation, 
      and mutual support to achieve common goals.`,
      img:partnership
    },
    {
      title: "Passion",
      des: `The dedication to pursuing what you love and putting your 
      heart and soul into your endeavors, fostering enthusiasm, and inspiring others`,
      img:passion
    },
    {
      title: "Performance",
      des: `Focusing on financial success and sustainability to
      ensure that resources are available for 
      achieving the organization's mission and vision.`,
      img:performance
    }
  ];

  return (
      <div className='values-container'>
        <div className='values-heading-div'><h1 className='values-heading-h1'>Our Values</h1></div>
        <div className='values-sub-container'>

          <div className='boxes'>
            <div className='div-professionalism'>Professionalism<div></div></div>  <div className='div-des'>{data[0].des}</div> </div>
        
          <div className='boxes'>
            <div className='div-partnership'>Partnership<div></div></div> <div className='div-des'>{data[1].des}</div></div>
           
          <div className='boxes'><div className='div-passion'>Passion<div></div></div>  <div className='div-des'>{data[2].des}</div></div>
        
          <div className='boxes'><div className='div-performance'>Performance<div></div></div> <div className='div-des'>{data[3].des}</div></div>
          </div> 
          
           
           
          
           
          </div>
      
    
  );
};

export default Values;
