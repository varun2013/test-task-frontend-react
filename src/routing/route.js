import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { USER_VIEWS } from './routeContants';
import APP from '../components/App'

const router = (
  <Switch>
    <Route exact path={USER_VIEWS} component={APP} />
    <Redirect from="/*" to={USER_VIEWS} />
  </Switch>
);

export default router;