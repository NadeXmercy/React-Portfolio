import { Box, Container, Typography, Grid, TextField, Button, Paper, useTheme, IconButton, Snackbar, Alert, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/ThemeContext';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';

const Contact = () => {
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: error instanceof Error ? error.message : 'Failed to send message',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: '7017518052r@gmail.com',
      link: 'mailto:7017518052r@gmail.com'
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      value: 'Mainpuri, Uttar Pradesh, India'
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      value: 'ritik-bhadauria-UP07',
      link: 'https://www.linkedin.com/in/ritik-bhadauria-up07/'
    },
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      value: 'github.com/NadeXmercy',
      link: 'https://github.com/NadeXmercy'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: isDarkMode 
          ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(33,33,33,0.95) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)',
        paddingTop: { xs: '64px', sm: '72px' },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url('/src/assets/grid-pattern.png')`,
          opacity: isDarkMode ? 0.05 : 0.1,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 800,
              textAlign: 'center',
              mb: { xs: 4, sm: 6 },
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={loading}
                        sx={{
                          py: 1.5,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          fontSize: '1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          borderRadius: '50px',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Grid container spacing={2}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: `0 8px 24px ${isDarkMode ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`,
                        },
                        cursor: info.link ? 'pointer' : 'default',
                      }}
                      onClick={() => info.link && window.open(info.link, '_blank')}
                    >
                      <IconButton
                        sx={{
                          color: theme.palette.primary.main,
                          background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                          '&:hover': { background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' },
                        }}
                      >
                        {info.icon}
                      </IconButton>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '0.9rem',
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;