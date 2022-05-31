import React, { useCallback } from 'react';

import { DefaultInput } from './DefaultInput';

interface INumberInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  onBlur: (value: number) => void;
}

export const NumberInput: React.FC<INumberInputProps> = ({ id, value, onChange, onBlur }) => {
  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value;

      onChange(Number(newValue.replace(/\D/g, '')));
    },
    [onChange],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const value = e.target.value;

      const newValue = value.replace(/\D/g, '');

      onBlur(Number(newValue));
    },
    [onBlur],
  );

  return <DefaultInput onBlur={handleBlur} id={id} value={String(value)} onChange={handleChange} />;
};
