import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import imageOne from './images/image-2.jpeg';
import imageTwo from './images/image-3.jpeg';
import imageThree from './images/image-4.jpeg';
import imageFour from './images/image-5.jpeg';
import Button from '@mui/material/Button';



const heights = [300, 150, 150]; // Fixed heights for each image

const imageUrls = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
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





    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
      >
        {/* About Section */}
        <Grid item xs={12} md={6}>

            <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Masonry columns={2} spacing={2}>
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
    </Box>









    <Grid container spacing={2} marginLeft={3} marginBottom={3}>

<Grid item xs={12} sm={4} sx={{textAlign:'center'}}>
<Typography
   variant='h4'
   sx={{textAlign:'center'}}>
 Free Shipping
  </Typography>

  <Typography
   variant='body1'
   sx={{textAlign:'center'}}>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Typography>

  
</Grid>




<Grid item xs={12} sm={4} sx={{textAlign:'center'}}>
 
<Typography
   variant='h4'
   sx={{textAlign:'center'}}>
 Premium Quality
  </Typography>

  <Typography
   variant='body1'
   sx={{textAlign:'center'}}>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Typography>

</Grid>



<Grid item xs={12} sm={4} sx={{textAlign:'center'}}>
<Typography
   variant='h4'
   sx={{textAlign:'center'}}>
 100% secure checkout
  </Typography>

  <Typography
   variant='body1'
   sx={{textAlign:'center'}}>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Typography>

  
</Grid>



</Grid>























    <Grid container spacing={2} marginLeft={3} marginBottom={3}>

<Grid item xs={12} sm={4}>
  <Box 
          component="img"
          src={imageOne}
          sx={{ width: '300px',
            height: '350px',
            borderRadius:'0px',
           }}
        />
</Grid>




<Grid item xs={12} sm={4}>
  <Box 
          component="img"
          src={imageTwo}
          sx={{ width: '300px',
            height: '350px',
            borderRadius:'0px',
           }}
        />
</Grid>


<Grid item xs={12} sm={4}>
  <Box 
          component="img"
          src={imageThree}
          sx={{ width: '300px',
            height: '350px',
            borderRadius:'0px',
           }}
        />
</Grid>




<Grid item xs={12} sm={4} sx={{textAlign:'center'}} marginRight={2}>
  
  
  <Typography
   variant='h3'
   sx={{textAlign:'center'}}>
 Follow us on Instagram
  </Typography>

  <Typography
   variant='body1'
   sx={{textAlign:'center'}}>
 @Tinacollections
  </Typography>

  <Button 
  variant="contained"
  >


    Follow
    </Button>
  
 
</Grid>






</Grid>









</>


  );
}
