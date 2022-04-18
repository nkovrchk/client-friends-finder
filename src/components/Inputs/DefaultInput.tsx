import React, { InputHTMLAttributes } from 'react';

import { InputStyled } from './styled';

type IInput = InputHTMLAttributes<HTMLInputElement>;

export const DefaultInput: React.FC<IInput> = (props) => <InputStyled autoComplete="off" {...props} />;
