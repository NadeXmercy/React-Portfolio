import { AppBar, Box, Container, IconButton, Toolbar, Button, useTheme, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        background: isDarkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between',
            px: { xs: 1, sm: 2 },
            py: { xs: 1, sm: 1.5 },
          }}
        >
          <Button
            onClick={() => navigate('/')}
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              textTransform: 'none',
              '&:hover': {
                background: 'transparent',
                color: theme.palette.primary.dark,
              },
            }}
          >
            Ritik
          </Button>

          {/* Desktop Navigation */}
          <Box 
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  color: isActive(item.path) ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive(item.path) ? 600 : 500,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: isActive(item.path) ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
                    height: '2px',
                    width: '100%',
                    background: theme.palette.primary.main,
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton 
              onClick={toggleTheme} 
              sx={{ 
                ml: 1,
                color: isDarkMode ? '#fff' : '#000',
                transition: 'color 0.3s ease, transform 0.2s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  transform: 'rotate(180deg)',
                },
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <IconButton 
              onClick={toggleTheme}
              sx={{ 
                color: isDarkMode ? '#fff' : '#000',
                transition: 'color 0.3s ease, transform 0.2s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  transform: 'rotate(180deg)',
                },
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton 
              onClick={() => setMobileMenuOpen(true)}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu Drawer */}
          <SwipeableDrawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpen={() => setMobileMenuOpen(true)}
            sx={{
              '& .MuiDrawer-paper': {
                width: '70%',
                maxWidth: '300px',
                background: isDarkMode ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
              },
            }}
          >
            <List sx={{ pt: 2 }}>
              {navItems.map((item) => (
                <ListItem 
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  sx={{
                    py: 2,
                    borderLeft: isActive(item.path) ? `4px solid ${theme.palette.primary.main}` : 'none',
                    background: isActive(item.path) 
                      ? (isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)') 
                      : 'transparent',
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    sx={{
                      pl: 2,
                      '& .MuiTypography-root': {
                        color: isActive(item.path) ? theme.palette.primary.main : theme.palette.text.primary,
                        fontWeight: isActive(item.path) ? 600 : 500,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
