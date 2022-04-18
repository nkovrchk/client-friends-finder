import React, { useCallback } from 'react';

import { DefaultInput } from './DefaultInput';

interface INumberInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

export const NumberInput: React.FC<INumberInputProps> = ({ id, value, onChange, max }) => {
  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value;

      const isNumber = /^\d+$/.test(newValue);

      if (isNumber) {
        const numVal = Number(newValue);
        const result = max ? (numVal > max ? max : numVal) : numVal;

        onChange(result);
        return;
      }

      onChange(isNumber ? Number(newValue) : value);
    },
    [max, onChange, value],
  );

  return <DefaultInput id={id} value={String(value)} onChange={handleChange} />;
};
