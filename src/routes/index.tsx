import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { GraphPage } from 'pages/GraphPage';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';

import { ROUTES } from './consts';

export const Routes: React.FC = () => (
  <Switch>
    <Route path={ROUTES.GRAPH.PATH} component={GraphPage} exact />
    <Route path={ROUTES.LOGIN.PATH} component={LoginPage} exact />
    <Route path={ROUTES.ROOT.PATH} component={MainPage} exact />
  </Switch>
);
