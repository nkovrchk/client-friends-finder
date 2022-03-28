import { http } from 'net/http';

import { IGreetingGetResponse } from './types';

export const GreetingApi = {
  get: (name: string): Promise<IGreetingGetResponse> => {
    return http.get(`/greeting?name=${name}`).then(({ data }) => data);
  },

  getSocial: (): Promise<{ vk: string }> => {
    return http.get('/social').then(({ data }) => data);
  },
};
