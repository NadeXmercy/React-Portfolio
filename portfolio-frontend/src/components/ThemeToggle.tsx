import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      sx={{
        ml: 1,
        '&:hover': {
          background: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle; 