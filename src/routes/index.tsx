import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
);
