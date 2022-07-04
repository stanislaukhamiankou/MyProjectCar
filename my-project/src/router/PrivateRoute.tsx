import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routes } from './Config/config.routes';

type TPropsPrivateRoute = {
  isLogin?: string | null;
  component: any;
  path: any;
};
const defaultPropsPrivateRoute = {
  isLogin: false,
};
const PrivateRoute = ({ component: Component, isLogin, ...rest }: TPropsPrivateRoute) => (
  <Route
    {...rest}
    render={props => {
      if (isLogin) {
        return <Component {...props} />;
      }
      return <Redirect to={routes.default} />;
    }}
  />
);
PrivateRoute.defaultProps = defaultPropsPrivateRoute;
export default PrivateRoute;
