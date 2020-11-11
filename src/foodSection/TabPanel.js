import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

//FILES
import FoodCard from './../components/FoodCard';

const useStyles = makeStyles((theme) => ({
  foodCardsContainer: {
    paddingTop: 14,
    paddingBottom: 14,
  },
}));

function TabPanel({ items, index, value }) {
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      {value === index && (
        <div className={classes.foodCardsContainer}>
          <FoodCard children={items[index].label} />
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
