import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Link,
  useMediaQuery,
  TextField,
  Button,
  Container,
  Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Facebook,
  LinkedIn,
  Instagram,
  ArrowForward
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  subscribeToNewsletter,
  showLoadingIndicator
} from '../../redux/actions';

const XIcon = (props) => (
  <Box
    component='span'
    sx={{
		  display: 'flex',
		  alignItems: 'center',
		  justifyContent: 'center',
		  width: '1em',
		  height: '1em'
    }}
  >
    <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z'
      />
    </svg>
  </Box>
);

function Footer () {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Newsletter state
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user starts typing again
    if (emailError) setEmailError(false);
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Updated subscribe handler with validation
  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setEmailError(false);
      dispatch(showLoadingIndicator(true));
      dispatch(subscribeToNewsletter({ email }));
      setEmail(''); // Clear field after successful submission
    } else {
      setEmailError(true);
    }
  };

  // Structured link arrays
  const supportLinks = [
    { name: 'Chat with us', link: '/' },
    { name: 'Help Center', link: '/' },
    { name: 'Contact Us', link: '/app/contact' },
    { name: 'Legal Notice', link: '/' }
  ];

  const accountLinks = [
    { name: 'Doctor', link: '/app/doctor/login' },
    { name: 'Hospital', link: '/app/hospital/login' },
    { name: 'Pharmacy', link: '/app/pharmacy/login' }
  ];

  const informationLinks = [
    { name: 'About us', link: '/app/about' },
    { name: 'Careers', link: '/' },
    { name: 'Blog', link: '/' },
    { name: 'Privacy Policy', link: '/' }
  ];

  const socialLinks = [
    {
      Icon: Facebook,
      link: 'https://web.facebook.com/profile.php?id=61563608982312&sk=about'
    },
    { Icon: XIcon, link: 'https://x.com/treat20736' },
    { Icon: Instagram, link: 'https://www.instagram.com/m_treat1' },
    { Icon: LinkedIn, link: 'https://www.linkedin.com/company/m-treat/' }
  ];

  // Links renderer with consistent spacing
  const renderLinks = (links) => {
    return links.map((item, index) => (
      <Link
        key={index}
        href={item.link}
        color='inherit'
        underline='hover'
        sx={{
				  display: 'block',
				  mb: 1,
				  fontSize: { xs: '0.8rem', sm: '0.85rem' },
				  '&:hover': { color: 'primary.main' }
        }}
      >
        {item.name}
      </Link>
    ));
  };

  // Column component with consistent styling
  const FooterColumn = ({ title, children }) => (
    <Grid item xs={6} sm={6} md={3} sx={{ mb: { xs: 2, md: 0 }, px: 1 }}>
      <Typography
        variant='h6'
        sx={{
				  fontWeight: 600,
				  mb: 1.5,
				  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
				  color: 'primary.main'
        }}
      >
        {title}
      </Typography>
      {children}
    </Grid>
  );

  return (
    <Box
      id='app-footer'
      sx={{
			  bgcolor: isDarkMode ? '#0a0a0a' : '#f8f9fa',
			  color: isDarkMode ? '#e0e0e0' : '#212529',
			  borderTop: `1px solid ${isDarkMode ? '#333333' : '#e0e0e0'}`,
			  padding: { xs: '2rem 1rem', md: '4rem 2rem' },
			  mt: 6
      }}
    >
      <Container maxWidth='xl'>
        {/* Main Grid Layout */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {/* Newsletter Column */}
          <Grid item xs={12} md={3} sx={{ mb: { xs: 3, md: 0 } }}>
            <Box sx={{ pr: { md: 2 } }}>
              <Typography
                variant='h6'
                sx={{
								  fontWeight: 600,
								  mb: 1.5,
								  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
								  color: 'primary.main'
                }}
              >
                M-TREAT
              </Typography>
              <Typography
                variant='body2'
                sx={{
								  mb: 1.5,
								  fontSize: { xs: '0.8rem', sm: '0.85rem' }
                }}
              >
                Subscribe to our newsletter
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  placeholder='Enter email'
                  variant='outlined'
                  size='small'
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                  sx={{
									  flex: 1,
									  '& .MuiInputBase-input': {
									    fontSize: { xs: '0.8rem', sm: '0.85rem' }
                    },
                  }}
                />
                <Button
                  variant='contained'
                  onClick={handleSubscribe}
                  size='small'
                  sx={{
									  minWidth: '40px',
									  px: 1.5,
									  bgcolor: 'primary.main',
									  '&:hover': { bgcolor: 'primary.dark' }
                  }}
                >
                  <ArrowForward fontSize='small' />
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Other Columns */}
          <Grid container item xs={12} md={9} spacing={2}>
            <FooterColumn title='Location'>
              <Typography
                variant='body2'
                sx={{
								  fontSize: { xs: '0.8rem', sm: '0.85rem' },
								  mb: 1
                }}
              >
                Nairobi, KENYA
              </Typography>
              <Typography
                variant='body2'
                sx={{
								  fontSize: { xs: '0.8rem', sm: '0.85rem' },
								  mb: 1
                }}
              >
                +254 759 965 954
              </Typography>
              <Typography
                variant='body2'
                sx={{
								  fontSize: { xs: '0.8rem', sm: '0.85rem' }
                }}
              >
                info@m-treat.com
              </Typography>
            </FooterColumn>

            <FooterColumn title='Support'>
              {renderLinks(supportLinks)}
            </FooterColumn>

            <FooterColumn title='Account'>
              {renderLinks(accountLinks)}
            </FooterColumn>

            <FooterColumn title='Information'>
              {renderLinks(informationLinks)}
            </FooterColumn>
          </Grid>
        </Grid>

        {/* Social Media */}
        <Box
          sx={{
					  display: 'flex',
					  justifyContent: 'center',
					  gap: 2,
					  mt: 3
          }}
        >
          {socialLinks.map(({ Icon, link }, index) => (
            <IconButton
              key={index}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
							  color: 'inherit',
							  '&:hover': { color: 'primary.main' },
							  width: isSmallScreen ? 32 : 40,
							  height: isSmallScreen ? 32 : 40,
							  padding: 0,
							  display: 'flex',
							  alignItems: 'center',
							  justifyContent: 'center'
              }}
            >
              <Icon
                fontSize={isSmallScreen ? 'small' : 'medium'}
                sx={{
								  fontSize: isSmallScreen ? '1.25rem' : '1.5rem'
                }}
              />
            </IconButton>
          ))}
        </Box>

        {/* Copyright */}
        <Divider sx={{ my: 2 }} />
        <Typography
          variant='body2'
          sx={{
					  textAlign: 'center',
					  fontSize: { xs: '0.7rem', sm: '0.75rem' },
					  opacity: 0.8
          }}
        >
          © M-TREAT {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
