import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ResetPasswordContainer from './ResetPasswordContainer';
import AuthContainer from './AuthContainer';

function AuthRoutes() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/auth`} component={AuthContainer} />
      <Route
        path={`${match.path}/reset_password`}
        component={ResetPasswordContainer}
      />
    </Switch>
  );
}
export default AuthRoutes;
