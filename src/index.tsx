import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from 'routes';
import { AppContainer, PageContainer } from 'styled';
import { theme } from 'theme';

import 'normalize.css';
import { AppHeader } from './pages/AppHeader';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <RecoilRoot>
        <AppHeader />
        <PageContainer>
          <BrowserRouter basename="/">
            <AppRoutes />
          </BrowserRouter>
        </PageContainer>
      </RecoilRoot>
    </AppContainer>
  </ThemeProvider>
);
