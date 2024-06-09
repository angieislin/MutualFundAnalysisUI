import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FundEntry from './components/funds/FundEntry';
import FunctionDetail from './components/funds/FundDetail';
import { Suspense, useCallback } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Box, ThemeProvider as MuiThemeProvider, Typography} from '@mui/material';
import Switch from '@mui/material/Switch';

function App() {
  const { themeConfig, toggleTheme } = useTheme();
  const handleChange = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);
  return (
    <MuiThemeProvider theme={themeConfig}>
      <Box 
        sx={{
          position: 'absolute'
        }}>
          <Switch
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Typography component='span'>Light</Typography>
        </Box>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FundEntry />} />
          <Route path='/fund/:fundId' element={<Suspense fallback={'Loading....'}><FunctionDetail /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
