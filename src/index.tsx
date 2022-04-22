import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components/Header';
import { NotificationProvider } from 'context/provider/NotificationProvider';
import { HttpInterceptor } from 'global';
import { Routes } from 'routes';
import { ROUTES } from 'routes/consts';
import { AppContainer, PageContainer } from 'styled';
import { theme } from 'theme';

import 'normalize.css';
import { Footer } from './components/Footer';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <RecoilRoot>
        <BrowserRouter basename={ROUTES.ROOT.PATH}>
          <NotificationProvider>
            <HttpInterceptor>
              <PageContainer>
                <Header />
                <Routes />
                <Footer />
              </PageContainer>
            </HttpInterceptor>
          </NotificationProvider>
        </BrowserRouter>
      </RecoilRoot>
    </AppContainer>
  </ThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
