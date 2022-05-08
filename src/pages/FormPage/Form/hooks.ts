import { useCallback, useEffect, useState } from 'react';

import { defaultFormData } from 'pages/FormPage/Form/consts';
import { IFormData } from 'pages/FormPage/Form/types';

export const useForm = (onSubmit: (data: IFormData) => void) => {
  const [formData, setFormData] = useState<IFormData>(defaultFormData);
  const [canSubmit, setCanSubmit] = useState(false);
  const [canAddWord, setCanAddWord] = useState(false);

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

  const addWord = useCallback(() => {
    const keyWords = formData.keyWords;

    _setFormData({ keyWords: [...keyWords, formData.word], word: '' });
  }, [_setFormData, formData.keyWords, formData.word]);

  const changeWord = useCallback(
    (event) => {
      _setFormData({ word: event.target.value });
    },
    [_setFormData],
  );

  const submitForm = useCallback(() => {
    onSubmit(formData);
  }, [formData, onSubmit]);

  const deleteWord = useCallback(
    (pos: number) => {
      const keyWords = formData.keyWords;

      keyWords.splice(pos, 1);

      _setFormData({ keyWords });
    },
    [_setFormData, formData.keyWords],
  );

  useEffect(() => {
    setCanSubmit(formData.keyWords.length > 0);
  }, [formData.keyWords.length]);

  useEffect(() => {
    const length = formData.word.length;
    setCanAddWord(length > 0 && length <= 15);
  }, [formData.word.length]);

  return {
    formData,
    setFormData: _setFormData,
    changeDepth,
    changeWidth,
    addWord: canAddWord ? addWord : undefined,
    submitForm: canSubmit ? submitForm : undefined,
    changeWord,
    deleteWord,
    canSubmit,
    canAddWord,
  };
};
