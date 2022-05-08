import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthApi } from 'net/api/auth';

export const useSession = () => {
  const history = useHistory();

  const logout = useCallback(() => {
    AuthApi.logout().then(() => {
      history.push('/');
    });
  }, [history]);

  return {
    logout,
  };
};
