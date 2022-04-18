import styled from 'styled-components';
import { space, layout, SpaceProps, LayoutProps } from 'styled-system';

interface IBox extends SpaceProps, LayoutProps {}

export const Box = styled.div<IBox>`
  ${space}
  ${layout}
`;
