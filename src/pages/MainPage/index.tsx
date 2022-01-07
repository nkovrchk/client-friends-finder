import React, { useEffect } from 'react';

import { GreetingApi } from 'net/greeting';

export const MainPage: React.FC = () => {
  useEffect(() => {
    GreetingApi.get('my friend').then((data) => console.log(data));
  }, []);

  return <div>Hello world, my friend!</div>;
};
