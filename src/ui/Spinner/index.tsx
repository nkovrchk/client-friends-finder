import styled from 'styled-components';

export const Spinner = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }

  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid #d3d3d3;
  border-right: 1.1em solid #d3d3d3;
  border-bottom: 1.1em solid #d3d3d3;
  border-left: 1.1em solid #939393;
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
