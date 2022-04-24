import { atom } from 'recoil';

import { defaultGraphAtom } from './consts';
import { IFriendAtom, IGraphAtom } from './types';

export const graphAtom = atom<IGraphAtom>({
  key: 'graphAtom',
  default: defaultGraphAtom,
});

export const friendAtom = atom<IFriendAtom | null>({
  key: 'friendAtom',
  default: null,
});
