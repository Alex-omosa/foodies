import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ResetPasswordContainer from './ResetPasswordContainer';
import AuthContainer from './AuthContainer';

function AuthRoutes() {
  const match = useRouteMatch();
  return (
    <Route path={`${match.path}/`}>
      <Switch>
        <Route
          path={`${match.path}/auth/reset_password`}
          component={ResetPasswordContainer}
        />
        <Route path={`${match.path}/auth`} component={AuthContainer} />
      </Switch>
    </Route>
  );
}
export default AuthRoutes;
