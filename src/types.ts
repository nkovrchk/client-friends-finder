import { RawNodeDatum } from 'react-d3-tree/lib/types/common';

export interface ITreeNode extends Omit<RawNodeDatum, 'attributes'> {
  attributes: {
    id: string;
    photo: string;
    isMatch: boolean;
  };
}
