import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/:topic?" component={Dashboard} />
    <Route exact path="/user/login" component={Login} />
    <Route path="/user/profile" isPrivate component={Profile} />
  </Switch>
);

export default Routes;
