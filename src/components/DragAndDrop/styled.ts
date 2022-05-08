import styled from 'styled-components';

export const DraggableContent = styled.div`
  width: 100%;
`;

export const DraggableStyled = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]}px;
  border: 1px solid ${({ theme }) => theme.colors.cardStroke};
  border-radius: ${({ theme }) => theme.space[2]}px;
`;
