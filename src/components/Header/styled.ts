import { css } from '@styled-system/css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 0;
  left: 0;
  right: 0;
  height: 68px;
  z-index: 198;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(50px);

  padding: 0 ${({ theme }) => theme.space[4]}px;
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const HeaderItem = styled.div`
  margin-left: ${({ theme }) => theme.space[8]}px;

  &:last-child {
    margin-left: 0;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  ${({ theme }) => css(theme.typography.h4SemiBold)};

  &:link {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
