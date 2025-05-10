import { Typography , Grid, Paper} from '@mui/material';



export default function Footer(){
    return (
        <>
<Grid container spacing={2}>


<Grid item xs={12} sm={4}>
<Paper elevation={3} style={{padding: 16}}>

<Typography 
            variant="body1" 
            sx={{ textAlign: 'center' }}
          >
            hello world
          </Typography>
</Paper>
</Grid>





<Grid item xs={12} sm={4}>
<Paper elevation={3} style={{padding: 16}}>

<Typography 
            variant="body1" 
            sx={{ textAlign: 'center' }}
          >
            hello world
          </Typography>
</Paper>
</Grid>





<Grid item xs={12} sm={4}>
<Paper elevation={3} style={{padding: 16}}>
<Typography 
            variant="body1" 
            sx={{ textAlign: 'center' }}
          >
            hello world
          </Typography>

</Paper>
</Grid>







</Grid>


        
        </>

    );
}