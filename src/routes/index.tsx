import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PageContainer } from 'styled';
import { Spinner } from 'ui/Spinner';

import { AuthenticatedRoute } from './AuthenticatedRoute';
import { ROUTES } from './consts';

const MainPage = lazy(() => import('pages/MainPage'));
const FormPage = lazy(() => import('pages/FormPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const GraphPage = lazy(() => import('pages/GraphPage'));

export const Routes: React.FC = () => (
  <PageContainer>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <AuthenticatedRoute path={ROUTES.FORM.PATH} component={FormPage} />
        <AuthenticatedRoute path={ROUTES.GRAPH.PATH} component={GraphPage} />
        <Route path={ROUTES.LOGIN.PATH} component={LoginPage} />
        <Route path={ROUTES.ROOT.PATH} component={MainPage} />
      </Switch>
    </Suspense>
  </PageContainer>
);
