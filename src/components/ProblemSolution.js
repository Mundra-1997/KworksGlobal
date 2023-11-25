import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const features = [
  'Feature 1',
  'Feature 2',
  'Feature 3',
  // Add more features as needed
];

const ProblemSolution = ({ productName }) => {
  const circleStyle = {
    position: 'relative',
    width: 300,
    height: 300,
    borderRadius: '50%',
    border: '2px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  };

  const featureStyle = {
    position: 'absolute',
    color: '#fff',
    transform: 'rotate(-90deg)',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '100px', // Adjust width for better positioning
  };

  return (
    <Paper style={circleStyle} elevation={3}>
      <Typography variant="h5">{productName}</Typography>
      <Box position="relative" width="100%" height="100%">
        {features.map((feature, index) => (
          <Typography
            key={index}
            style={{
              ...featureStyle,
              top: '50%',
              left: '50%',
              transformOrigin: '0% 100%',
              transform: `rotate(${(360 / features.length) * index}deg) translate(150px) rotate(-${(360 / features.length) * index}deg)`,
            }}
          >
            {feature}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default ProblemSolution;
