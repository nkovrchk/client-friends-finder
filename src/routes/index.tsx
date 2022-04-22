import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { FormPage } from 'pages/FormPage';
import { GraphPage } from 'pages/GraphPage';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { RouteContainer } from 'styled';

import { ROUTES } from './consts';

export const Routes: React.FC = () => (
  <RouteContainer>
    <Switch>
      <Route path={ROUTES.FORM.PATH} component={FormPage} />
      <Route path={ROUTES.GRAPH.PATH} component={GraphPage} />
      <Route path={ROUTES.LOGIN.PATH} component={LoginPage} />
      <Route path={ROUTES.ROOT.PATH} component={MainPage} />
    </Switch>
  </RouteContainer>
);
