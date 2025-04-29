import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function Contact() {


const [formData, setFormData]=useState({
  name: '',
  email:'',
  subject:'',
  message:'',
});


  function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
  
  }


function handleChange(e){
  const {name, value}=e.target;
  setFormData(prev=>({
    ...prev,
    [name]:value
  }));
}








  return (

    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      {/* Contact Info + Form */}
      <Grid container spacing={2} mb={5}>
        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={2}
            sx={{
              height: '100%',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>

            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Typography variant="body1" gutterBottom>
              example@gmail.com
            </Typography>

            <Typography variant="h6" gutterBottom>
              Phone
            </Typography>
            <Typography variant="body1" gutterBottom>
              0743646383
            </Typography>

            <Typography variant="h6" gutterBottom>
              Location
            </Typography>
            <Typography variant="body1" gutterBottom>
              Spur Mall, Ruiru
            </Typography>
          </Paper>
        </Grid>

        {/* Form */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={2}
            sx={{
              height: '100%',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
              noValidate
              autoComplete="off"
            >
              <TextField 
              label="Name" 
              type="text" 
              variant="standard"
              onChange={handleChange} 
              required />

              <TextField 
              label="Your Email" 
              type="email" 
              variant="standard"
              onChange={handleChange}
               required />

              <TextField 
              label="Subject" 
              type="text" 
              variant="standard" 
              onChange={handleChange}
              required />

              <TextField
                label="Message"
                type="text"
                multiline
                rows={4}
                variant="standard"
                onChange={handleChange}
                required
              />

              <Button 
              variant="contained" 
              sx={{ mt: 2 }}
              onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Full-width Map */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.018434173158!2d36.95675657588786!3d-1.147314335491925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47b787a14d2f%3A0x4eb5e7db3fc573d9!2sRuiru%20Main%20Stage!5e0!3m2!1sen!2ske!4v1745954763189!5m2!1sen!2ske"
          width="100%"
          height="450px"
          style={{ border: 0 , marginTop: 2}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
}
