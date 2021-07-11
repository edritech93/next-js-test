import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0095da',
      main: '#0095da',
      dark: '#0095da',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffbd01',
      main: '#ffbd01',
      dark: '#ffbd01',
      contrastText: '#000',
    },
  },
});

export default theme;