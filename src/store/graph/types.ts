import { ITreeNode } from 'types';

export interface IGraphAtom {
  root: ITreeNode | null;
  keyWords: string[];
}

export interface IFriendAtom {
  id: number;
  name: string;
  imageUrl: string;
  matched: boolean;
  wall: string[];
  info: string[];
  groups: string[];
}
