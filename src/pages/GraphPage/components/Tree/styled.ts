import styled from 'styled-components';

export const TreeWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const TreeStyled = styled.div`
  flex: 1;

  & .friends-finder-tree {
    background-color: ${({ theme }) => theme.colors.hover20};
    pointer-events: auto;
  }
`;
