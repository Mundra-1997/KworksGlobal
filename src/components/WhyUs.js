import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const WhyUs = () => {
  return (
    <Grid container sx={{ p: 4,  }}>
      {/* Left Section */}
      <Grid item xs={12} sm={6} sx={{ mb: { xs: 3, sm: 0 } }}>
        <Box sx={{ paddingRight: { sm: 4 } }}>
          <Typography variant="h5" gutterBottom>
            Why FAAS?
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: '1.6' }}>
            Finance as a Service (FaaS) is a modern financial solution that outsources key financial functions to expert professionals. With FaaS, businesses gain access to services like accounting, financial analysis, tax planning, and more, all on a flexible subscription or pay-as-you-go basis.
          </Typography>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '16px' }}>
          {/* Box 1 */}
          <Box sx={{ flex: '1 1 100%', bgcolor: '#f0f0f0', p: 2, borderRadius: '4px', mb: { xs: 3, sm: 0 } }}>
            <Typography variant="h6">Expertise</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
            Our team of financial experts has a track record of success in supporting businesses like yours.
            </Typography>
          </Box>
          {/* Box 2 */}
          <Box sx={{ flex: '1 1 100%', bgcolor: '#f0f0f0', p: 2, borderRadius: '4px' }}>
            <Typography variant="h6">Customized Solutions</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
             We tailor our FaaS offerings to meet your unique needs and goals.

            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 100%', bgcolor: '#f0f0f0', p: 2, borderRadius: '4px' }}>
            <Typography variant="h6">Scalability</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
            As your business grows, our FaaS solution can scale with you.
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 100%', bgcolor: '#f0f0f0', p: 2, borderRadius: '4px' }}>
            <Typography variant="h6">Efficiency & Agility</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
            No hassle of in-house finance management but gain agility with outsourced finance team, allowing you to focus on growing your business.

            </Typography>
          </Box>
          {/* Add more boxes as needed */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default WhyUs;
