import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SpinnerStyled = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }

  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 8px solid #ccc;
  border-right: 8px solid #ccc;
  border-bottom: 8px solid #ccc;
  border-left: 8px solid #939393;
  transform: translateZ(0);
  animation: load 1.1s infinite linear;

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
