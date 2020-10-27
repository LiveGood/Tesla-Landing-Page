import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import TeslaBlue from "../images/SpaceX-Logo-Blue.svg"
import { Container } from './globalStyles'
import Subpanel from './subPanel'

const FooterContainer = styled.footer`
  background-color: #EFEFEF;
  margin-top: 50px;
  position: relative;
`;

const TopFooter = styled.div`
  width: 100%;
  display: flex;
`;

const OuterAboutPanel = styled.div`
  display: flex;
  width: inherit;
  
  @media screen and (max-width: 1300px) {
    max-height: 450px;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const AboutPanel = styled.div`
  width: 25%;
  text-align: center;
  padding: 50px 0;
  max-height: 350px;
  border-right: 2px solid white;  
  border-bottom: 2px solid white;  


  @media screen and (max-width: 1040px) {
    width: 100%;
  }

  transition: width 2s;
`;

const Heading = styled.h4`
  
`;

const InfoItem = styled(Link)`
  color: #9F9F9F;
  padding: 30px 0;
  display: block;
  cursor: pointer;
  text-decoration: none;
`;

const BottomFooter = styled(Container)`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Their is a better way to do this, but I don't know it yet... */
  @media screen and (max-width: 1300px) {
    margin-top: 372px;  
  }
  @media screen and (max-width: 960px) {
    margin-top: 1670px;  
  } 
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  } 
  @media screen and (max-width: 428px) {
    padding: 15px 5px 0 5px;
  }
`;

const Copywrite = styled.div`
  color: #9F9F9F;
  text-align: center;
  font-size: 0.8rem;

  @media screen and (max-width: 1300px) {
    margin-top: 16px;
  }
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

const BlueLogo = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  @media screen and (max-width: 800px) {
    margin-left: 15px;
  } 
  @media screen  and (max-width: 500px) {
    width: 92%;
  }
  @media screen  and (max-width: 360px) {
    width: 90%;
    margin-left: 34px;
  }

  transition: width 0.3s linear;
`;

const Footer = () => {
  const data = useStaticQuery(footerQuery);
  const footerInfo = data.footer.edges[0].node.footer;
  
  return (  
    <FooterContainer>
      <TopFooter>
        <OuterAboutPanel>
          {footerInfo.aboutPanels.map((panel, index) => (
            <AboutPanel key={index}>
              <Heading>{panel.heading}</Heading>
              {panel.items.map((item, index) => {
                return <InfoItem to="/" key={index}>{item}</InfoItem>
              })}
            </AboutPanel>
          ))}
        </OuterAboutPanel>
        <Subpanel 
          heading={footerInfo.updates.heading} 
          content={footerInfo.updates.content} 
        />
      </TopFooter>
      
      <BottomFooter>
        <Copywrite>{footerInfo.bottomFooter}</Copywrite>
        <BlueLogo to="/"><Logo src={TeslaBlue}/></BlueLogo>
      </BottomFooter>
    </FooterContainer> 
  )
}

const footerQuery = graphql`
query FooterQuery {
  footer: allFile (filter: { 
    name: { eq : "footer" } 
    sourceInstanceName: { eq : "data" }
  }) {
    edges {
      node {
        footer: childDataJson {
          bottomFooter
          updates {
            heading
            content
          }
          aboutPanels {
            heading
            items
          }
        }
      }
    }
  }
}
`;

export default Footer
