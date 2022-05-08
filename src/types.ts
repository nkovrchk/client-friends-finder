import { RawNodeDatum } from 'react-d3-tree/lib/types/common';

export interface ITreeNode extends Omit<RawNodeDatum, 'attributes'> {
  attributes: {
    id: string;
    photo: string;
    matched: boolean;
    linked: boolean;
    info: string[];
    wall: string[];
    groups: string[];
  };
}
