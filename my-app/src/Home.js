import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import mainImage from './images/image-1.jpeg';

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
            <Item sx={{ height: '100%', boxSizing: 'border-box' }}>
              <Box 
                component="img"
                src={mainImage}
                sx={{ width: '100%' }}
              />
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Stack spacing={2}>
              <Item>
                <Box 
                  component="img"
                  src={mainImage}
                  sx={{ width: '100%' }}
                />
              </Item>
              <Item>
                <Box 
                  component="img"
                  src={mainImage}
                  sx={{ width: '100%' }}
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
    </>
  );
}
