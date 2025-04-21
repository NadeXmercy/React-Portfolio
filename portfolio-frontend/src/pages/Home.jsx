import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import profile from '../assets/profile.jpg';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: isDarkMode
          ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(33,33,33,0.95) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: { xs: '64px', sm: '72px' },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url('/src/assets/pattern.jpg')`,
          opacity: isDarkMode ? 0.05 : 0.1,
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          py: { xs: 6, md: 8 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          sx={{ mt: { xs: 2, sm: 4 } }}
        >
          {/* Text Content */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Box sx={{ maxWidth: 600, px: { xs: 2, sm: 0 } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    mb: { xs: 2, sm: 3 },
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Hi, I'm Ritik Bhadauria
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                    fontWeight: 800,
                    lineHeight: { xs: 1.2, sm: 1.1 },
                    mb: { xs: 2, sm: 3 },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    wordBreak: 'break-word',
                    hyphens: 'auto',
                  }}
                >
                  Full Stack Developer
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: 1.8,
                    mb: { xs: 4, sm: 5 },
                    maxWidth: '90%',
                  }}
                >
                  I build exceptional digital experiences with modern technologies. Specializing in creating responsive, user-friendly web applications that solve real-world problems.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
              >
                <Button
                  variant="contained"
                  onClick={() => navigate('/contact')}
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: 'white',
                    px: { xs: 4, sm: 6 },
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 600,
                    borderRadius: '50px',
                    textTransform: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Hire Me
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleDownloadResume}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    px: { xs: 4, sm: 6 },
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 600,
                    borderRadius: '50px',
                    textTransform: 'none',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: 'white',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </Box>
          </Grid>

          {/* Profile Image */}
          <Grid
            item
            xs={12}
            md={5}
            order={{ xs: 1, md: 2 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 4, sm: 0 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '280px', sm: '320px', md: '400px' },
                  height: { xs: '280px', sm: '320px', md: '400px' },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: `0 20px 40px ${isDarkMode ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)'}`,
                  border: `4px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`,
                }}
              >
                <motion.img
                  src={profile}
                  alt="Ritik Bhadauria"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    scale: 1.1,
                  }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
