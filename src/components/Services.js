import React from 'react';
import Paper from '@mui/material/Paper';
import './Service.css'
import { useState, useEffect,useRef } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Acc from '../image/accounting.png';
import Dcc from '../image/advisory.png';
import Carousel from 'react-carousel';
import Slider from 'react-slick';
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
   

  return (
    <div className='service-container'>
      <Paper elevation={5} className='service-paper'>
        <div><img className='service-img' src={data[0].image} alt='pics'></img></div>
        <div><h3>Finance As A Service</h3></div>
      </Paper>
      <Paper elevation={5} className='service-paper'>
        <div><img className='service-img'src={data[1].image} alt='pics'></img></div>
        <div><h3>Fractional CFO Service</h3></div>
      </Paper>
    </div>
  )
};

export default Services;