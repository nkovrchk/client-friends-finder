import { http } from 'net/http';

import { IAuthApi } from './types';

export const AuthApi: IAuthApi = {
  checkToken: () => {
    return http
      .post('/auth/check-token')
      .then(() => ({ isAuthed: true }))
      .catch(() => ({ isAuthed: false }));
  },
  logout: () => {
    return http.post('/auth/logout');
  },
};
