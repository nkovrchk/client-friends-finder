import { css } from '@styled-system/css';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const Link = styled(HashLink)`
  text-decoration: none;
  cursor: pointer;

  ${({ theme }) => css(theme.typography.body1Regular)};

  &:link {
    color: ${({ theme }) => theme.colors.linksPrimary};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.linksPrimary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.linksVisited};
  }
`;
