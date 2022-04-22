import { ITreeNode } from 'types';

export interface IGraphAtom {
  root: ITreeNode | null;
  keyWords: string[];
}
