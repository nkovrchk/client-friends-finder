import styled from 'styled-components';

export const NotificationStyled = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 30px;
  width: 384px;
  z-index: 199;
  background-color: ${({ theme }) => theme.colors.simpleBlack};
  border-radius: ${({ theme }) => theme.space[2]}px;
  padding: ${({ theme }) => theme.space[3]}px;

  animation: fade 0.4s, fade 0.4s 3.6s reverse;

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const NotificationContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`;
