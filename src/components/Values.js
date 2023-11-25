import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import capitalP from '../image/200w.webp';
import passion from '../image/passion.jpg'
import partnership from '../image/partnership.jpg'
import professionalism from '../image/professionalism.jpg'
import performance from '../image/performance.jpg'

const Values = () => {
  const imageStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  };
  
  const imgStyle = {
    margin: '5px',
    width: '80%', // Set your image size
    height: '95%',
  };
  
  const paperTitleStyle = {
    textAlign: 'center',
    padding: '10px',
    width: '40%%',
    height: '50px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#FFA8A8',
  };
  
  const paperDescStyle = {
    margin: '15px',
    backgroundColor: '#FCE6F8',
    padding: '10px',
  };
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
    <Grid container spacing={3} justifyContent="center" style={{ marginTop: '50px' }}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography variant='h6'>Our Values</Typography>
      </Grid>
      {data.map((item, index) => (
        <Grid key={index} container item xs={12} alignItems="center">
          {/* Image */}
          <Grid item xs={3}>
            <img src={item.img} alt={item.title} style={imgStyle} />
          </Grid>
          {/* Title and Description */}
          <Grid item xs={9}>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={3}>
                <Paper elevation={3} style={paperTitleStyle}>
                  {item.title}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper style={paperDescStyle}>
                  {item.des}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Values;
