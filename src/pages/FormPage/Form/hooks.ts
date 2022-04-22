import { useCallback, useState } from 'react';

import { defaultFormData } from 'pages/FormPage/Form/consts';
import { IFormData } from 'pages/FormPage/Form/types';

export const useForm = () => {
  const [formData, setFormData] = useState<IFormData>(defaultFormData);

  const _setFormData = useCallback((value: Partial<IFormData>) => {
    setFormData((prevState) => ({ ...prevState, ...value }));
  }, []);

  const changeDepth = useCallback(
    (event) => {
      _setFormData({ depth: Number(event.target.value) });
    },
    [_setFormData],
  );

  const changeWidth = useCallback(
    (event) => {
      _setFormData({ width: Number(event.target.value) });
    },
    [_setFormData],
  );

  return {
    formData,
    setFormData: _setFormData,
    changeDepth,
    changeWidth,
  };
};
