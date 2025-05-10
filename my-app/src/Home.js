import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import mainImage from './images/image-1.jpeg';
import imageOne from './images/image-2.jpeg';
import imageTwo from './images/image-3.jpeg';
import imageThree from './images/image-4.jpeg';
import imageFour from './images/image-5.jpeg';



const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item sx={{ 
               height: '600px',
               width:'1000px', 
                }}>
              <Box 
                component="img"
                src={mainImage}
                sx={{ width: '1000px',
                  height: '600px',
                 }}
              />
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Stack spacing={0}>
              <Item>
                <Box 
                  component="img"
                  src={mainImage}
                  sx={{ width: '400px',
                    height: '300px',
                    borderRadius:'0px',
                   }}
                />
              </Item>
              <Item>
                <Box 
                  component="img"
                  src={mainImage}
                  sx={{ width: '400px' ,
                    height: '300px',
                  }}
                />
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Typography 
        variant="h3"
        sx={{ textAlign: 'center' }}
      >
        SHE GOT YOU COVERED
      </Typography>

      <Typography 
        variant="h2"
        sx={{ textAlign: 'center' }}
      >
        Explore the Range
      </Typography>


      <Grid container spacing={2} marginLeft={3} marginBottom={3}>

        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
          <Box 
                  component="img"
                  src={imageOne}
                  sx={{ width: '400px',
                    height: '450px',
                    borderRadius:'0px',
                   }}
                />
          </Paper>
        </Grid>




        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
          <Box 
                  component="img"
                  src={imageTwo}
                  sx={{ width: '400px',
                    height: '450px',
                    borderRadius:'0px',
                   }}
                />
          </Paper>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
          <Box 
                  component="img"
                  src={imageThree}
                  sx={{ width: '400px',
                    height: '450px',
                    borderRadius:'0px',
                   }}
                />
          </Paper>
        </Grid>




        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
          <Box 
                  component="img"
                  src={imageFour}
                  sx={{ width: '400px',
                    height: '450px',
                    borderRadius:'0px',
                   }}
                />
          </Paper>
        </Grid>


      </Grid>



      <Grid container spacing={2} marginRight={3}>

        <Grid item xs={12} sm={6}>
          <Paper elevation={6}>
          <Box 
                  component="img"
                  src={imageFour}
                  sx={{ width: '500px',
                    height: '500px',
                    borderRadius:'0px',
                   }}
                />

          </Paper>
        </Grid>



        <Grid item xs={12} sm={6}>
          <Paper elevation={6}>
          <Box 
                  component="img"
                  src={imageFour}
                  sx={{ width: '500px',
                    height: '500px',
                    borderRadius:'0px',
                   }}
                />

          </Paper>
        </Grid>



      </Grid>


    </>
  );
}
