import React from 'react';

import { Button } from 'ui/Button';

import { useForm } from './hooks';
import { FormStyled, FormFooter, FormBodyStyled } from './styled';
import { IFormData } from './types';

interface IFormProps {
  onSubmit: (formData: IFormData) => void;
}

export const Form: React.FC<IFormProps> = ({ onSubmit }) => {
  const { formData, changeDepth, changeWidth } = useForm();

  return (
    <FormStyled>
      <FormBodyStyled>
        <label htmlFor="depth">глубина графа</label>
        <input id="depth" onChange={changeDepth} type="number" value={formData.depth} />
        <label htmlFor="width">ширина графа</label>
        <input id="width" onChange={changeWidth} type="number" value={formData.width} />
      </FormBodyStyled>
      <FormFooter>
        <Button onClick={() => onSubmit(formData)}>Построить граф</Button>
      </FormFooter>
    </FormStyled>
  );
};
