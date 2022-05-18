import React from 'react';

import { SpinnerContainer, SpinnerStyled } from './styled';

export const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerStyled>
        <div className="circle1 circle" />
        <div className="circle2 circle" />
        <div className="circle3 circle" />
        <div className="circle4 circle" />
        <div className="circle5 circle" />
        <div className="circle6 circle" />
        <div className="circle7 circle" />
        <div className="circle8 circle" />
        <div className="circle9 circle" />
        <div className="circle10 circle" />
        <div className="circle11 circle" />
        <div className="circle12 circle" />
      </SpinnerStyled>
    </SpinnerContainer>
  );
};
