import { http } from 'net/http';
import { ITreeNode } from 'types';

import { IVKApi } from './types';

export const VKApi: IVKApi = {
  getGraph: (formData): Promise<ITreeNode> => {
    return http.post('/vk/graph', formData).then(({ data }) => data);
  },
};
