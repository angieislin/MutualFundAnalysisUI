import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#556cd6',
      light: 'rgba(85, 108, 214, 0)',
      contrastText: '#f2f2f2',
    },
    success: {
      main: '#ff4c74'
    }, 
    info: {
      main: '#01d1c5'
    },
    secondary: {
      main: '#00000099',
      light: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    divider: '#e2e2e2' 
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      // main: '#556cd6',
      main: '#fff',
      light: 'rgba(256, 256, 256, 0)',
      contrastText: '#5a5a5a'
    },
    success: {
      main: '#ff4c74'
    },  
    info: {
      main: '#01d1c5'
    },
    secondary: {
      main: '#fff',
      light: '#00000099'
    },
    background: {
      default: '#121212',
      paper: '#424242',
    },
    divider: '#fff' 
  },
});
