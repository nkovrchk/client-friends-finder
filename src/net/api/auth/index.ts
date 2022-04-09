import { http } from 'net/http';

import { IAuthApi } from './types';

export const AuthApi: IAuthApi = {
  checkToken: () => {
    return http.post('/auth/check-token').then(({ data }) => data);
  },
  login: () => {
    return http.get('/auth/process').then(({ data }) => data);
  },
};
