import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  padding: 0 25px;
  box-sizing: border-box;
  transition: padding 0.5s linear;
`;

export const CentredElement = css`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const UnderlineHover = css`
  :after {
    display:block;
    content: '';
    border-bottom: solid 2px ${props => props.color};  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  :hover:after { 
    transform: scaleX(1); 
    transform-origin: 0% 100%;
  }
`;

// One timers
export const MiddleHeading = css`
  width: 60%;
  text-align: center;

  @media screen and (max-width: 1010px) {
    width: 80%;  
  }
  @media screen and (max-width: 780px) {
    width: 100%;  
  }

  @media screen and (max-width: 330px) {
    font-size: 1.15rem;
  }
`;
