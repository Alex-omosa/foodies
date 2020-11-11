import React from 'react';
import SortRoundedIcon from '@material-ui/icons/SortRounded';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => ({
  navBar: {
    marginRight: 50,
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 50,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <IconButton
        aria-label=""
        onClick={() => {}}
        style={{ height: 15, width: 22 }}
      >
        <SortRoundedIcon />
      </IconButton>
      <IconButton
        aria-label=""
        onClick={() => {}}
        style={{ height: 15, width: 22 }}
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default NavBar;
