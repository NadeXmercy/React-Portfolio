import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App; 