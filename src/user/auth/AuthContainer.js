import React from 'react';
import {
  Link as RouterLink,
  useRouteMatch,
  Switch,
  Route,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import logo from './../../images/logo.svg';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';

const useStyles = makeStyles((theme) => ({
  authContainer: {
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
  },
  authHero: {
    height: '40vh',
    backgroundColor: '#ffff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    boxShadow: '0 4 30 rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  cont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
  },
  img: {
    // height: 40,
    marginBottom: 40,
  },
  link: {
    textDecoration: 'none',
    flexGrow: 1,
  },
  navBtn: {
    width: '100%',
  },
  authNav: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  imgLink: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: 'auto',
    height: 'auto',
  },
  formsContainer: {
    minHeight: '60vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
}));

function AuthContainer() {
  let match = useRouteMatch();
  const classes = useStyles();

  return (
    <div className={classes.authContainer}>
      <Paper className={classes.authHero}>
        <Container className={classes.cont}>
          <Link className={classes.imgLink} to="/">
            <img className={classes.img} src={logo} alt="logo" />
          </Link>

          <div className={classes.authNav}>
            <RouterLink className={classes.link} to={`${match.url}/login`}>
              <Button className={classes.navBtn}>Login </Button>
            </RouterLink>

            <RouterLink className={classes.link} to={`${match.url}/sign-up`}>
              <Button className={classes.navBtn}>Sign up </Button>
            </RouterLink>
          </div>
        </Container>
      </Paper>
      <div className={classes.formsContainer}>
        <Switch>
          <Route exact path={`${match.path}/login`} component={LoginForm} />
          <Route exact path={`${match.path}/sign-up`} component={SignUpForm} />
        </Switch>
      </div>
    </div>
  );
}

export default AuthContainer;