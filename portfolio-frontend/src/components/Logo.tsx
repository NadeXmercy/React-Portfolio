import { Box, Typography, useTheme } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';

const Logo = () => {
  const theme = useTheme();
  const { isDarkMode } = useThemeContext();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        '&:hover': {
          '& .logo-text': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      <Typography
        variant="h4"
        className="logo-text"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          letterSpacing: '1.5px',
          background: isDarkMode
            ? 'linear-gradient(45deg, #3B82F6, #8B5CF6)'
            : 'linear-gradient(45deg, #2563EB, #7C3AED)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'all 0.3s ease',
          position: 'relative',
          textShadow: isDarkMode 
            ? '0 0 20px rgba(59, 130, 246, 0.3)'
            : '0 0 20px rgba(37, 99, 235, 0.3)',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '2px',
            background: isDarkMode
              ? 'linear-gradient(45deg, #3B82F6, #8B5CF6)'
              : 'linear-gradient(45deg, #2563EB, #7C3AED)',
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
          },
        }}
      >
        Ritik Bhadauria
      </Typography>
    </Box>
  );
};

export default Logo; 