import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components/Header';
import { AuthProvider, NotificationProvider } from 'context';
import { HttpInterceptor } from 'interceptors';
import { Routes } from 'routes';
import { AppContainer, RootContainer } from 'styled';
import { theme } from 'theme';

import config from '../config.json';

import 'normalize.css';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <RootContainer>
      <AppContainer>
        <RecoilRoot>
          <BrowserRouter basename={config.basename}>
            <NotificationProvider>
              <HttpInterceptor>
                <AuthProvider>
                  <Header />
                  <Routes />
                </AuthProvider>
              </HttpInterceptor>
            </NotificationProvider>
          </BrowserRouter>
        </RecoilRoot>
      </AppContainer>
    </RootContainer>
  </ThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
