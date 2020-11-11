import React from 'react';
import Routes from './routes';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import BottomNav from './bottomNav/BottomNav';

const useStyles = makeStyles((theme) => ({
  app: {
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    overflow: 'hidden',
    paddingBottom: 0,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.app} square elevation={0}>
        <Routes />
        <BottomNav />
      </Paper>
    </React.Fragment>
  );
}

export default App;
