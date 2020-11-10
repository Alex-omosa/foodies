import React from 'react';
//MUI
import { makeStyles } from '@material-ui/core/Styles';

//FILES
import Search from './Search';
import { Heading1 } from '../../../components/Typography';
const useStyles = makeStyles((theme) => ({
  homeHeader: {
    marginTop: 40,
    marginRight: 50,
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.homeHeader}>
      <div>
        <Heading1 title={'Delicious '} />
        <Heading1 title={'food for you '} />
      </div>
      <Search />
    </div>
  );
}

export default Header;
