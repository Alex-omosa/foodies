import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formButton: {
    marginTop: '60%',
    borderRadius: 30,
    height: 70,
    width: '100%',
  },
  formGroup: {
    minWidth: '70%',
    height: '100%',
    minHeight: '100%',
  },
}));

function SignUpForm() {
  const classes = useStyles();
  return (
    <FormGroup className={classes.formGroup}>
      <TextField id="email-address" label="Email Address" color="secondary" />
      <TextField id="password" label="Password" color="secondary" />
      <TextField
        id="confirm-password"
        label="Confirm Password"
        color="secondary"
      />
      <Button
        className={classes.formButton}
        variant="contained"
        color="primary"
      >
        sign up
      </Button>
    </FormGroup>
  );
}

export default SignUpForm;
