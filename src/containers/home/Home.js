import React from 'react';
//MUI
import { makeStyles } from '@material-ui/core/styles';

//FILES
import NavBar from './NavBar';
import Header from './header/Header';
import FoodSection from './../../foodSection/FoodSection';

const useStyles = makeStyles((theme) => ({
  home: {
    paddingTop: 50,
    height: '100%',
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <NavBar />
      <Header />
      <FoodSection />
    </div>
  );
}

export default Home;
