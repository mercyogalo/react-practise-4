import React, { useState } from 'react';
import {
	Box,
	Typography,
	Grid,
	TextField,
	Button,
	Paper,
	IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const StyledTextField = styled(TextField)(({ theme }) => ({
	marginBottom: '1rem',
	'& .MuiInputLabel-root': {
		color: 'black',
	},
	'& .MuiInputBase-root': {
		'& input, & textarea': {
			color: 'black',
		},
	},
	'& .MuiInputBase-input::placeholder': {
		color: 'black',
	},
}));

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		// Add API submission logic here
	};

	return (
		<Box
			sx={{
				width: '100%',
				margin: '0 auto',
				backgroundColor: 'white',
				color: 'black',
			}}
		>
			{/* Image Banner */}
			<Box
				component="img"
				src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/917/original/0f5fb0c3-4d09-4735-b23d-22c9344bdfc0.jpeg?1743453912"
				alt="Contact Us"
				sx={{
					maxHeight: '20vh',
					width: '100%',
					height: { xs: '12vh', sm: '15vh', md: '20vh' },
					objectFit: 'cover',
				}}
			/>

			{/* Contact Information and Form */}
			<Box
				sx={{
					width: { xs: '100%', sm: '100%', md: '80%' },
					margin: '0 auto',
					padding: '1rem',
					border: '1px solid #ddd',
				}}
			>
				<Grid container spacing={3}>
					{/* Contact Details */}
					<Grid item xs={12} md={6}>
						<Paper
							elevation={3}
							sx={{
								padding: '1.5rem',
								height: '100%',
								color: 'black',
								backgroundColor: 'white',
								border: 'none',
							}}
						>
							<Typography
								variant="h5"
								fontWeight="bold"
								mb={2}
								sx={{ fontSize: { xs: '1rem', sm: '1.4rem', md: '1.6rem' } }}
							>
								Contact Us
							</Typography>
							<Typography variant="body1" mb={2}>
								Address: _, Nairobi, Kenya
								<br />
								Phone: +254 759965954
								<br />
								Email: info@m-treat.com
								<br />
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-around',
									marginTop: '1rem',
								}}
							>
								<IconButton
									sx={{ color: 'blue' }}
									href="https://facebook.com"
									target="_blank"
								>
									<FacebookIcon />
								</IconButton>
								<IconButton
									sx={{ color: 'blue' }}
									href="https://linkedin.com"
									target="_blank"
								>
									<LinkedInIcon />
								</IconButton>
								<IconButton
									color="secondary"
									href="https://instagram.com"
									target="_blank"
								>
									<InstagramIcon />
								</IconButton>
								<IconButton
									color="secondary"
									href="https://twitter.com"
									target="_blank"
								>
									<TwitterIcon />
								</IconButton>
							</Box>
						</Paper>
					</Grid>

					{/* Send Us a Message Form */}
					<Grid item xs={12} md={6}>
						<Paper
							elevation={3}
							sx={{
								padding: '1.5rem',
								color: 'black',
								backgroundColor: 'white',
								border: 'none',
							}}
						>
							<Typography
								variant="h5"
								fontWeight="bold"
								mb={2}
								sx={{ fontSize: { xs: '1rem', sm: '1.4rem', md: '1.6rem' } }}
							>
								Send Us a Message
							</Typography>
							<form onSubmit={handleSubmit}>
								<StyledTextField
									fullWidth
									label="Your Name"
									variant="outlined"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
								<StyledTextField
									fullWidth
									label="Your Email"
									variant="outlined"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
								<StyledTextField
									fullWidth
									label="Message"
									variant="outlined"
									name="message"
									value={formData.message}
									onChange={handleChange}
									multiline
									rows={4}
									required
								/>
								<Button
									variant="contained"
									color="primary"
									fullWidth
									type="submit"
								>
									Send Message
								</Button>
							</form>
						</Paper>
					</Grid>
				</Grid>
				{/* Map Section */}
				<Box
					sx={{
						maxWidth: '100%',
						margin: '2rem auto',
						textAlign: 'center',
						//padding: "1rem",
					}}
				>
					<Typography variant="h5" fontWeight="bold" mb={2}>
						Our Location
					</Typography>
					<Box
						sx={{
							width: '100%',
							height: '40vh',
							borderRadius: '8px',
							overflow: 'hidden',
							position: 'relative',
							border: 'none',
						}}
					>
						<iframe
							title="map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.805214994713!2d36.815444685001765!3d-1.2912120322538954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d94cc03e45%3A0xa3cec6fbbcba20da!2sParliament%20Tower!5e0!3m2!1sen!2ske!4v1732293067269!5m2!1sen!2ske"
							width="100%"
							height="100%"
							frameBorder="0"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Contact;
