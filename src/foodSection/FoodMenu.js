import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//FILES
import TabPanel from './TabPanel';
import SlidingTabs from './Tabs';
//DUMMYD_DATA
const items = [
  {
    label: 'Foods',
    text: '1',
  },
  {
    label: 'Drinks',
    text: '2',
  },
  {
    label: 'Fruits',
    text: '3',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <SlidingTabs handleChange={handleChange} value={value} items={items} />
      <TabPanel index={value} value={value} items={items} />
    </div>
  );
}
