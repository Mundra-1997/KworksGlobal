import React from 'react';
import Paper from '@mui/material/Paper';
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
const data = [
  {
    title: "Finance As Service",
    image: Acc,
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
    image: Dcc,
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
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000); // Change the interval time (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Set to true if you want autoplay
    autoplaySpeed: 5000, // Change the autoplay interval time (in milliseconds) as needed
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div style={{ marginTop: '7%', textAlign: 'center' }}>
      <Typography variant='h4'>Our Services</Typography>
      <Slider ref={sliderRef} {...settings}>
        {data.map((service, index) => (
          <div key={index}>
            <Paper elevation={3} style={{ height: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px', width: '60%', margin: 'auto',backgroundColor:'lightblue' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '80px' }}>
                <img src={service.image} alt={service.title} style={{ width: '60%', height: '60%' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <List>
                  {service.points.map((point, i) => (
                    <ListItem key={i}>
                      <ListItemText primary={point} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Paper>
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default Services;