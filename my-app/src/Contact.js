import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import {getCSRFToken} from './../utils/csrf'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);


  const csrfToken=getCSRFToken()

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    axios.post(
      'http://127.0.0.1:8000/contact/inquiry/',
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true,
      }
    )
      .then(response => {
        console.log('Message sent:', response.data);
        setSuccess(true);
        setError(''); // Clear any previous error message
      })
      .catch(error => {
        console.error('Error sending message:', error.response?.data || error.message);
        setError('There was an issue submitting your form. Please try again.');
        setSuccess(false); // Reset success state on error
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Box
      sx={{
        width: '100vw',  // Full width
        minHeight: '100vh', // Full height
        backgroundColor: '#f5f5f5',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      {/* Contact Info + Form */}
      <Grid container spacing={2} mb={5} sx={{ height: '100%' }}>
        {/* Contact Info */}
        <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
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
        <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
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
                name="name"
                label="Name"
                type="text"
                variant="standard"
                onChange={handleChange}
                required
              />

              <TextField
                name="email"
                label="Your Email"
                type="email"
                variant="standard"
                onChange={handleChange}
                required
              />

              <TextField
                name="subject"
                label="Subject"
                type="text"
                variant="standard"
                onChange={handleChange}
                required
              />

              <TextField
                name="message"
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

              {/* Success or Error Message */}
              {success && (
                <Typography variant="body1" color="green" sx={{ mt: 2 }}>
                  Your message has been sent successfully!
                </Typography>
              )}
              {error && (
                <Typography variant="body1" color="red" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
