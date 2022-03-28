import React, { useCallback } from 'react';

import { VKApi } from 'net/api/vk';

export const VKPage: React.FC = () => {
  const getUser = useCallback(() => VKApi.getGraph(), []);

  return (
    <div>
      <div>Добро пожаловать в ВК!</div>
      <button type="button" onClick={getUser}>
        Получить данные
      </button>
    </div>
  );
};
