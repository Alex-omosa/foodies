import { Switch, Route } from 'react-router-dom';
import User from './user/User';
import Home from './containers/home/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/user" component={User} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
