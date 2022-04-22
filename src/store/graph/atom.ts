import { atom } from 'recoil';

import { defaultGraphAtom } from './consts';
import { IGraphAtom } from './types';

export const graphAtom = atom<IGraphAtom>({
  key: 'graphAtom',
  default: defaultGraphAtom,
});
