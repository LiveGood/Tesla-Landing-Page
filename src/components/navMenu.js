import React, { useState } from 'react'
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from 'gatsby'
import MobileIcon from './mobileIcon';
import { UnderlineHover } from './globalStyles'

const sidebarWidth = '89%';
const NavUl = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center; 
  padding: 0;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 750px;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? '-30px': '-110%')};
    transition: all 0.5s ease;
    justify-content: unset;
    background: #EFEFEF;
  }
`;

const NavItem = styled.li`
  ${UnderlineHover}
  padding: 0 15px;
  line-height: 30px;

  :last-child {
    border-right: none;
  }

  @media screen and (max-width: 960px) {
    width: ${sidebarWidth};
    border-right: none;
    border-bottom: 2px solid white;
  }
`;

const NavLinks = styled(Link)`
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: ${sidebarWidth};
    display: table;
    color: black;
  }
`;

function NavMenu() {
  const data = useStaticQuery(query);
  const navbarItems = data.navbar.edges[0].node.childDataJson.navbar
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <MobileIcon handleClick={handleClick} click={click}/>
      <NavUl click={click}>
        {navbarItems.map((item, index) => {
          return (
              <NavItem key={index}>
                <NavLinks to={item.path}>
                  {item.name}
                </NavLinks>
              </NavItem>
          )
        })}
      </NavUl>
    </>
  )
}

const query = graphql`
query NavbarQuery {
  navbar: allFile (filter: { 
     name: { eq : "navbar" } 
     sourceInstanceName: { eq : "data" }
   }) {
     edges {
       node {
         childDataJson {
           navbar {
             name
             path
           }
         }
       }
     }
   } 
 }
`;

export default NavMenu
