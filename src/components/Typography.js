import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heading1: {
    color: '#000',
  },
}));

export function Heading1({ title }) {
  const classes = useStyles();
  return (
    <Typography className={classes.heading1} variant="h1" color="initial">
      {title}
    </Typography>
  );
}

export function Heading2() {
  return <div></div>;
}
