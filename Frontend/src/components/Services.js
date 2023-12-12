import React from 'react';
import Paper from '@mui/material/Paper';
import 'animate.css';
import './Service.css'
import {useNavigate} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import advisory from '../image/advisory.png'
import tax from '../image/taxation.png'
const data = [
  {
    title: "Finance As Service",
    image: advisory,
    points: [
      "Bookkeeping & Accounting: Stay organized with accurate and up-to-date financial records.",
      "Financial Analysis: Gain insights into your financial health and make data-driven decisions.",
      "Cash Flow Management: Optimize cash flow and working capital.",
      "Tax Planning & Compliance: Ensure tax compliance and minimize your tax burden.",
      "Strategic Financial Advice: Get expert guidance on financial strategy and planning."
    ]
  },
  {
    title: "Fractional CFO Service",
    image: tax,
    points: [
      "Strategic Financial Planning: Crafting a financial roadmap to help you achieve your business goals.",
      "Budgeting and Forecasting: Accurate financial predictions for informed decision-making.",
      "Cash Flow Management: Optimizing cash flow to keep your business financially healthy.",
      "Risk Assessment and Mitigation: Identifying and managing financial risks.",
      "Mergers and Acquisitions: Expert guidance for successful business transactions."
    ]
  },
];

const Services = () => {
   
 const navigate = useNavigate()
  return (
    <div className='service-container'>
      <h1 className='service-title'>Our Services</h1>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/finance')}>
        <div><img className='service-img' src={data[0].image} alt='pics'></img></div>
        <p className='service-heading'>Finance As A Services</p>
      </Paper>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/cfo')}>
        <div><img className='service-img'src={data[1].image} alt='pics'></img></div>
        <p className='service-heading'>Fractional CFO Services</p>
      </Paper>
    </div>
  )
};

export default Services;