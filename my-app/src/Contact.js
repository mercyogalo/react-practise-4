import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';





export default function Contact(){


  return(
<>
<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 600,
          height: 600,
        },
      }}
    >
      <Paper>

<Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
    
      
   
      <div>

      <TextField 
      id="standard-basic" 
      label="Name" 
      type='text'
      variant="standard" 
      required
      />

      <TextField 
      id="standard-basic" 
      label="Your email" 
      variant="standard" 
      type='email'
      required
      />

    <TextField 
      id="standard-basic" 
      label="Subject" 
      type='text'
      variant="standard" 
      required
      />


  <TextField 
      id="standard-basic" 
      label="Name" 
      type='text'
      variant="standard" 
      required
      />
     
       
      </div>

      <Button variant="contained" endIcon={<SendIcon />}>
        Submit
      </Button>

    </Box>
    </Paper>

    </Box>

</>
  );
    
}