import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { VKPage } from 'pages/VKPage';

export const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" component={MainPage} exact />
    <Route path="/vk" component={VKPage} exact />
    <Route path="/login" component={LoginPage} exact />
  </Switch>
);
