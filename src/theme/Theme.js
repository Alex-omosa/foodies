import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '2.125rem',
      fontWeight: 700,
      lineHeight: '2.57rem',
    },
  },
  palette: {
    primary: {
      main: '#FA4A0C',
    },
    secondary: {
      main: '#BADASS',
    },
    background: {
      paper: '#F2F2F2',
    },
  },
});
export default theme;
