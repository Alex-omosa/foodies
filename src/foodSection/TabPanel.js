import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

//FILES
import FoodCard from './../components/FoodCard';

const useStyles = makeStyles((theme) => ({
  foodCardsContainer: {
    paddingTop: 14,
    paddingBottom: 14,
    display: 'flex',
  },
}));

function TabPanel({ data, index, value }) {
  const classes = useStyles();

  return (
    <div
      className={classes.foodCardsContainer}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      {value === index &&
        data.foods.map((food, i) => <FoodCard key={i} food={food} />)}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
