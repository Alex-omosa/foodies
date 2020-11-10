import React from 'react';
//MUI
import { makeStyles } from '@material-ui/core/styles';

//FILES
import NavBar from './NavBar';
import Header from './header/Header';

const useStyles = makeStyles((theme) => ({
  home: {
    paddingLeft: 50,
    paddingTop: 50,
    paddingBottom: 40,
    height: '100vh',
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <NavBar />
      <Header />
    </div>
  );
}

export default Home;
