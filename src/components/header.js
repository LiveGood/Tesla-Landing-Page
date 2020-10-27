import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import TeslaLogo from '../images//SpaceX-Logo-White.svg'
import { Container } from './globalStyles'
import NavMenu from './navMenu'
import MobileIcon from './mobileIcon'

const InHeader = styled.header`
  color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  padding: 0;
  align-items: center;
  font-size: 1.2rem;
  /* Doesn´t look well when you scroll down to the white background part. */
  /* position: sticky; */
  top: 0;
  z-index: 999;
  padding-bottom: 53%;
  
  @media screen and (max-width: 1040px) {
    padding-bottom: 50%;
  }

  @media screen and (max-width: 780px) {
    padding-bottom: 48%;
  }

  @media screen and (max-width: 420px) {
    padding-bottom: 38%;
  }

  @media screen and (max-width: 380px) {
    padding-bottom: 35%;
  }

  @media screen and (max-width: 330px) {
    padding-bottom: 33%;
  }
`;

const NavbarContainer = styled(Container)`
  ${Container};
  display: flex;
  justify-content: space-between;
  color: white;
  margin-top: 20px;

  @media screen and (max-width: 420px) {
    margin-top: 0;
  }

  @media screen and (max-width: 380px) {
    margin-top: -10px;
  }
`;

export const NavLogo = styled(Link)`
  line-height: 80px;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: inline;
  align-items: center;
`;

export const Logo = styled.img`

  @media screen and (max-width: 420px) {
    width: 90%  
  }
  @media screen and (max-width: 380px) {
    width: 86%;
  }
  @media screen and (max-width: 330px) {
    padding-bottom: 3px;
  }
  transition: width 0.3s linear;
`;

const Header = ({ siteTitle }) => (
  <InHeader>
    <NavbarContainer>
      <NavLogo to="/">
        <Logo src={TeslaLogo} />
      </NavLogo>

      <MobileIcon />

      <NavMenu />
    </NavbarContainer>
  </InHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
