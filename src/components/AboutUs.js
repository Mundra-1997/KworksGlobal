import React from 'react';
import Grid from '@mui/material/Grid';
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

const AboutUs = () => {
  const keyFeatures = [
    { text: 'Team of Experts', icon: <AccountCircleIcon /> },
    { text: 'Startup Friendly', icon: <AccessibilityNewIcon /> },
    { text: 'Quick Support', icon: <SupportIcon /> },
    { text: 'Efficiency', icon: <SpeedIcon /> },
    { text: 'Transparency', icon: <AnimationIcon /> },
    { text: 'Ownership Mindset', icon: <BusinessIcon /> },
  ];

  return (
    <Grid container spacing={2} sx={{marginTop:'10%'}}>
      {/* Image on the left */}
      <Grid item xs={12} sm={6}>
        <img src={AboutImg} alt="About Us" style={{ width: '80%', height: 'auto' }} />
      </Grid>
      {/* Text content on the right */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
          <Typography variant="h5" gutterBottom>
            We Work the Numbers! So you can Work Wonders!
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in September 2023, K Works Global Solutions' vision is to transform the financial landscape for businesses of all sizes and bring the future of managed financial services to small to medium-sized companies.
            Our mission is to empower businesses with the appropriate financial tools and expertise needed so they can perform wonders. We believe that by simplifying financial management, we enable our clients to focus on what they do best while we handle the numbers. Together, we're shaping a future where financial success is within reach for every business.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Key Features:
          </Typography>
          {/* Bullet points with icons */}
          <List>
            {keyFeatures.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>{feature.icon}</ListItemIcon>
                
                <ListItemText primary={feature.text} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid>
        <Typography variant='h4'>From Founder's Pen</Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
