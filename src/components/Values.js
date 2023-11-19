import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Values = () => {
  const data = [
    {
      title: "Professionalism",
      des: `Upholding high standards of conduct, 
      ethics, and integrity in all interactions and endeavors,
      and demonstrating a commitment to excellence`
    },
    {
      title: "Partnership",
      des: `Valuing and nurturing collaborative 
      relationships with others, fostering teamwork, cooperation, 
      and mutual support to achieve common goals.`
    },
    {
      title: "Passion",
      des: `The dedication to pursuing what you love and putting your 
      heart and soul into your endeavors, fostering enthusiasm, and inspiring others`
    },
    {
      title: "Performance",
      des: `Focusing on financial success and sustainability to
      ensure that resources are available for 
      achieving the organization's mission and vision.`
    }
  ];

  return (
    <Grid container spacing={3} justifyContent="center" style={{ marginTop: '50px' }}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography variant='h6'>Our Values</Typography>
      </Grid>
      {data.map((item, index) => (
        <Grid key={index} container item xs={12} spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Paper elevation={3} style={{
              textAlign: 'center',
              padding: '10px',
              width: '100%',
              height: '50px',
              borderRadius: '5px',
              fontSize: '14px',
              fontWeight: 'bold',
              backgroundColor: index === 0 ? '#FF7F50' : index === 1 ? '#6495ED' : index === 2 ? '#32CD32' : '#FFD700'
            }}>
              {item.title}
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Typography variant='body1' style={{ margin: '15px' }}>
              {item.des}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Values;
