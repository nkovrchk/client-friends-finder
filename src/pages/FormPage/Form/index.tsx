import React from 'react';

import { Field } from 'components/Field';
import { NumberInput } from 'components/Inputs/NumberInput';
import { Button } from 'ui/Button';

import { useForm } from './hooks';
import { FormStyled, FormFooterStyled, FormBodyStyled, FormInnerStyled } from './styled';
import { IFormData } from './types';

interface IFormProps {
  onSubmit: (formData: IFormData) => void;
}

export const Form: React.FC<IFormProps> = ({ onSubmit }) => {
  const { formData, setFormData } = useForm();

  return (
    <FormStyled>
      <FormInnerStyled>
        <FormBodyStyled>
          <Field id="width" label="ширина графа">
            <NumberInput
              id="width"
              value={formData.width}
              max={5}
              onChange={(value) => setFormData({ width: value })}
            />
          </Field>
          <Field id="depth" label="глубина графа">
            <NumberInput
              id="depth"
              max={5}
              value={formData.depth}
              onChange={(value) => setFormData({ depth: value })}
            />
          </Field>
        </FormBodyStyled>
        <FormFooterStyled>
          <Button onClick={() => onSubmit(formData)}>Построить граф</Button>
        </FormFooterStyled>
      </FormInnerStyled>
    </FormStyled>
  );
};
