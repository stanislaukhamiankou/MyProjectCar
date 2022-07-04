import { RouteProps, RouteComponentProps } from 'react-router-dom';
import * as React from 'react';

import { routes } from './Config/config.routes';

export type Route = RouteProps;
export type RoutesValue = {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
};
export type Routes = {
  readonly [key in ValueOfObject<typeof routes>]?: RoutesValue;
};
export type RoutesProps = {
  routes: Routes;
};
