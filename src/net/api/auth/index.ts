import { authHttp } from 'net/http';

import { IAuthApi } from './types';

export const AuthApi: IAuthApi = {
  checkToken: () => {
    return authHttp
      .post('/check-token')
      .then(() => ({ isAuthed: true }))
      .catch(() => ({ isAuthed: false }));
  },
};
