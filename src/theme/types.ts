import { colors } from './colors';

export interface ITheme {
  typography: ITypography;
  space: number[];
  colors: IColors;
}

export type IColors = typeof colors;

export interface IVariant {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  fontFamily: string;
  letterSpacing: string;
}

export interface ITypography {
  h1Bold: IVariant;
  h2SemiBold: IVariant;
  h3SemiBold: IVariant;
  h4SemiBold: IVariant;
  h5SemiBold: IVariant;
  body1Regular: IVariant;
  body1SemiBold: IVariant;
  body2Regular: IVariant;
  body2SemiBold: IVariant;
  caption1Regular: IVariant;
  caption1SemiBold: IVariant;
  caption2Regular: IVariant;
  caption2SemiBold: IVariant;
}
