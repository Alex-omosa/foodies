import React from 'react';
import Routes from './routes';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: '100vh',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.app} square elevation={0}>
        <Routes />
      </Paper>
    </React.Fragment>
  );
}

export default App;
