import { Switch, Route, useHistory } from 'react-router-dom';
import User from './user/User';
import Home from './containers/home/Home';
import Cart from './containers/cart/Cart';
import Profile from './containers/profile/Profile';
import PageNotFound from './containers/404/PageNotFound';

function Routes() {
  console.log(useHistory());
  return (
    <Switch>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/user" component={Profile} />
      <Route path="/user" component={User} />
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
