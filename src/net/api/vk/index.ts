import { http } from 'net/http';

import { IVKApi } from './types';

export const VKApi: IVKApi = {
  getGraph: (): Promise<any> => {
    return http.get('/vk/graph').then(({ data }) => data);
  },
};
