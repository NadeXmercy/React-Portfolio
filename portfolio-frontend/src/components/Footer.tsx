import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/NadeXmercy' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/your-profile' },
    { icon: <TwitterIcon />, url: 'https://twitter.com/your-profile' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 3, sm: 4 },
        background: isDarkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              textAlign: { xs: 'center', sm: 'left' },
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
            }}
          >
            © {new Date().getFullYear()} Ritik Bhadauria. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, sm: 2 },
              justifyContent: 'center',
            }}
          >
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.text.secondary,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 