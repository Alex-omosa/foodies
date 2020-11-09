import { Switch, Route } from 'react-router-dom';
import AuthContainer from './containers/auth/AuthContainer';
import Home from './containers/home/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/auth" component={AuthContainer} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
