import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const OutwardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

const InnerContainer = styled.div`
  width: 48%;
  word-wrap: break-word;
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

function InfoPanel() {
  const data = useStaticQuery(query);
  const infoPanels = data.infoPanel.edges[0].node.infoPanel.infoPanels

  return (
    <OutwardContainer>
      {infoPanels.map((info, index) => {
        return (
          <InnerContainer key={index}>
            <h2>{info.heading}</h2>
            <div>{info.content}</div>
          </InnerContainer>
        )
      })}
    </OutwardContainer>
  )
}

const query = graphql`
query InfoPanelQuery {
  infoPanel: allFile (filter: { 
    name: { eq : "infoPanel" } 
    sourceInstanceName: { eq : "data" }
  }) {
    edges {
      node {
        infoPanel: childDataJson {
          infoPanels {
            heading
            content
          }
        }
      }
    }
  }
}
`;

export default InfoPanel
