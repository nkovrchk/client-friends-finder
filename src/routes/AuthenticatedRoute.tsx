import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuth } from 'context';

export const AuthenticatedRoute = ({ ...props }: RouteProps) => {
  const { isAuthed } = useAuth();

  if (!isAuthed) return <Redirect to="/login" />;

  return <Route {...props} />;
};
