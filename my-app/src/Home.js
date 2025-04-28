import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import mainImage from './images/image-1.jpeg';
import Contact from './Contact'

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
        variant="h2"
        sx={{ textAlign: 'center' }}
      >
        About Us
      </Typography>


<Contact />


    </>
  );
}
