import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  formGroup: {
    minWidth: '70%',
    height: '100%',
    padding: 10,
    minHeight: '100%',
  },
  formButton: {
    marginTop: '40%',
    borderRadius: 30,
    height: 70,
    width: '100%',
  },
  forgotPasswordLink: {
    marginTop: 30,
  },
}));

function LoginForm() {
  const classes = useStyles();

  return (
    <FormGroup className={classes.formGroup}>
      <TextField id="email-address" label="Email Address" color="secondary" />
      <TextField id="password" label="Password" color="secondary" />
      <Link
        component={RouterLink}
        to="/user/auth/reset_password"
        className={classes.forgotPasswordLink}
        underline="none"
      >
        Forgot password?
      </Link>
      <Button
        className={classes.formButton}
        variant="contained"
        color="primary"
      >
        login
      </Button>
    </FormGroup>
  );
}

export default LoginForm;
