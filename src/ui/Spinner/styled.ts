import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SpinnerStyled = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;

  & .circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  & .circle:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #939393;
    border-radius: 100%;
    -webkit-animation: circle-spin 1.2s infinite ease-in-out both;
    animation: circle-spin 1.2s infinite ease-in-out both;
  }
  & .circle2 {
    transform: rotate(30deg);
  }
  & .circle3 {
    transform: rotate(60deg);
  }
  & .circle4 {
    transform: rotate(90deg);
  }
  & .circle5 {
    transform: rotate(120deg);
  }
  & .circle6 {
    transform: rotate(150deg);
  }
  & .circle7 {
    transform: rotate(180deg);
  }
  & .circle8 {
    transform: rotate(210deg);
  }
  & .circle9 {
    transform: rotate(240deg);
  }
  & .circle10 {
    transform: rotate(270deg);
  }
  & .circle11 {
    transform: rotate(300deg);
  }
  & .circle12 {
    transform: rotate(330deg);
  }
  & .circle2:before {
    animation-delay: -1.1s;
  }
  & .circle3:before {
    animation-delay: -1s;
  }
  & .circle4:before {
    animation-delay: -0.9s;
  }
  & .circle5:before {
    animation-delay: -0.8s;
  }
  & .circle6:before {
    animation-delay: -0.7s;
  }
  & .circle7:before {
    animation-delay: -0.6s;
  }
  & .circle8:before {
    animation-delay: -0.5s;
  }
  & .circle9:before {
    animation-delay: -0.4s;
  }
  & .circle10:before {
    animation-delay: -0.3s;
  }
  & .circle11:before {
    animation-delay: -0.2s;
  }
  & .circle12:before {
    animation-delay: -0.1s;
  }

  @keyframes circle-spin {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;
