import React from 'react';
import Grid from '@mui/material/Grid';
import './AboutUs.css'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import icons from Material-UI
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SupportIcon from '@mui/icons-material/Support';
import SpeedIcon from '@mui/icons-material/Speed';
import AnimationIcon from '@mui/icons-material/Animation';
import BusinessIcon from '@mui/icons-material/Business'; // Assuming an icon for Ownership Mindset
import AboutImg from '../image/fhwhhw.jpg';
import { ListItemIcon } from '@mui/material';
import priya from '../image/Picture1.jpg'
const AboutUs = () => {
  const keyFeatures = [
    { text: 'Team of Experts', icon: <AccountCircleIcon fontSize='80px'/> },
    { text: 'Startup Friendly', icon: <AccessibilityNewIcon fontSize='80px' /> },
    { text: 'Quick Support', icon: <SupportIcon fontSize='80px'/> },
    { text: 'Efficiency', icon: <SpeedIcon fontSize='80px'/> },
    { text: 'Transparency', icon: <AnimationIcon fontSize='80px'/> },
    { text: 'Ownership Mindset', icon: <BusinessIcon fontSize='80px'/> },
  ];

  return (
    <>
    <div className='container'>
      {/* Image on the left */}
      <div className='sub-container-1'>
        <img src={AboutImg} alt="About Us"  />
      </div>
      {/* Text content on the right */}
      <div  className='sub-container-2'>
        <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
          <h1 className='heading' style={{overflow:'hidden'}}  gutterBottom>
            We Work the Numbers! <br/>
            So you can Work Wonders!
          </h1>
          <p className='para'>
            Founded in September 2023, K Works Global Solutions' vision is to transform the financial landscape for businesses of all sizes and bring the future of managed financial services to small to medium-sized companies.
            Our mission is to empower businesses with the appropriate financial tools and expertise needed so they can perform wonders. We believe that by simplifying financial management, we enable our clients to focus on what they do best while we handle the numbers. Together, we're shaping a future where financial success is within reach for every business.
          </p>
          
        </Paper>
      </div>
      
    </div>
    <div>
    <h2 className="key-features" sx={{overflow:'hidden', marginLeft:'1rem'}}>Key Features</h2>
    <div className='container-2'>
      
    {keyFeatures.map((feature, index) => (
              <div  className='ListItem' key={index}>
                <span >{feature.icon}</span>
                
                <span>{feature.text}</span>
              </div>
            ))}
  </div>

  </div>
  <div className='container-3'>
     <h2 className='key-features'> From Founder's Pen</h2>
     <div className='container-3-sub'>
      <div className='container-3-sub-div1'><img src={priya} alt='priya pic'/></div>
      <div className='container-3-sub-div2'><Paper elevation={3}><p>
      Founder - Priya Chanduraj, over two decade of being a seasoned leader with a background in finance and business transformation, harnesses her extensive experience as a CFO, along with her adept use of cutting-edge technology and analytical capabilities. Her primary objective is to guarantee that her clients' financial strategies are not just aligned but intricately woven into the fabric of their overarching business objectives. She expertly blends her technical prowess with a deep understanding of business dynamics, resulting in the creation of pioneering solutions tailored to precisely meet her clients' unique accounting and finance requirements.
Priya possesses a multifaceted skill set that encompasses a wide range of competencies, including executing M&A transactions, implementing and optimizing systems, assessing workflow and enhancing processes, conducting financial reporting and in-depth analysis, crafting and managing budgets, skillfully overseeing cash flows, accurate forecasting, establishing and assessing internal controls. 
Priya's role as Chief Financial Officer at BlueWave Energy, a prominent renewable energy company, involved her in the comprehensive management of the organization's financial operations. She brings a wealth of experience from her tenure with Fortune 500 companies, with a primary focus on the energy sector. Priya has held senior financial leadership positions at industry giants such as Schneider Electric, the World Bank's International Finance Corporation (IFC), and the AES Corporation. Additionally, she is an active participant in nonprofit boards, serving as an advisory member for the Greater Boston Salvation Army and contributing her financial expertise to the Finance Executive International Boston Chapter.
        </p></Paper></div>
     </div>
  </div>
  </>
  );
};

export default AboutUs;


{/* <Typography variant="h4" gutterBottom>
            Key Features:
          </Typography>
       
          <ul className='main-list' >
            {keyFeatures.map((feature, index) => (
              <li className='ListItem' key={index}>
                <span >{feature.icon}</span>
                
                <span>{feature.text}</span>
              </li>
            ))}
          </ul> */}