import React from 'react';
import InputBase from '@material-ui/core/InputBase';

import { makeStyles } from '@material-ui/core/Styles';
const useStyles = makeStyles((theme) => ({
  input: {
    background: '#EFEEEE',
    borderRadius: 30,
    height: '3.7rem',
    color: '#000',
    paddingTop: 20,
    paddingRight: 35,
    paddingBottom: 20,
    paddingLeft: 35,
  },
  homeSearch: {
    marginTop: 28,
  },
}));

function Search() {
  const classes = useStyles();
  return (
    <div className={classes.homeSearch}>
      <InputBase className={classes.input} fullWidth placeholder="Search" />
    </div>
  );
}

export default Search;
