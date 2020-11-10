import React from 'react';
// import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//ICONS
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100vw',
  },
}));

function BottomNav() {
  const classes = useStyles();
  let [value, setValue] = React.useState('favorites');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      className={classes.bottomNav}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction value="home" icon={<HomeOutlinedIcon />} />
      <BottomNavigationAction
        value="favorites"
        icon={<FavoriteBorderOutlinedIcon />}
      />

      <BottomNavigationAction value="restore" icon={<RestoreIcon />} />
      <BottomNavigationAction
        value="files"
        icon={<PersonOutlineOutlinedIcon />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
