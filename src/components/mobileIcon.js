import React from 'react'
import styled from "styled-components"
import { FaBars } from 'react-icons/fa';

export const Icon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    right: -17px;
    top: 5px;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (max-width: 420px) {
    top: 3px;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 380px) {
    top: 0;
  }

  @media screen and (max-width: 330px) {
    font-size: 1.65rem;
  }
`;

function MobileIcon({handleClick}) {
  return (
    <Icon onClick={handleClick}>
      <FaBars />
    </Icon>
  )
}

export default MobileIcon
