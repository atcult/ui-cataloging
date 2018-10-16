/**
 * @format
 * @flow
 */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import type { Props } from './core/type/props';
import MARCcat from './components/MARCcat';

type P = Props & {};

export function ConnectedRoute({ id, component: Component, ...props }:P) {
  return (
    <Route render={() => <Component {...props} id={id} />} />
  );
}

export default class Router extends React.Component<*> {
  render() {
    const rootPath = this.props.match.path;
    return (
      <Switch>
        <ConnectedRoute path={`${rootPath}`} {...this.props} component={MARCcat} id="nav_root" />
        <Route render={() => (<Redirect to={`${rootPath}`} id="nav_root_redirect" />)} />
      </Switch>
    );
  }
}
