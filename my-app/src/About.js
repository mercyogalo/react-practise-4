import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const heights = [300, 150, 150]; // First image tall, next two smaller
const imageUrls = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // large image
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow: '0 4px 10px rgb(0 0 0 / 0.1)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 20px rgb(0 0 0 / 0.2)',
  },
}));

export default function About() {
  return (
    
<>
  <Grid
    container
    spacing={2}
    direction="row"
    alignItems="stretch"
    sx={{ minHeight: '100vh' }} // Full height
  >
    {/* About Section */}
    <Grid item xs={12} sm={6}>
      <Paper
        elevation={3}
        sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </Typography>
      </Paper>
    </Grid>

    {/* Image Section */}
    <Grid item xs={12} sm={6}>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Masonry columns={2} spacing={2} sx={{ width: '100%' }}>
          {heights.map((height, index) => (
            <Item key={index} sx={{ height }}>
              <img
                src={imageUrls[index]}
                alt={`Image ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
                draggable={false}
              />
            </Item>
          ))}
        </Masonry>
      </Box>
    </Grid>
  </Grid>
</>



  );
}
