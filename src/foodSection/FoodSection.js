import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//FILES
import ScrollableTabsButtonAuto from './FoodMenu';
const useStyles = makeStyles((theme) => ({
  foodSection: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingLeft: 50,
  },
}));

function FoodSection() {
  const classes = useStyles();
  return (
    <div className={classes.foodSection}>
      <ScrollableTabsButtonAuto />
    </div>
  );
}

export default FoodSection;
