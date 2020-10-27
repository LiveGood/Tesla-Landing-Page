import React from 'react'
import { useStaticQuery, graphql, } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { UnderlineHover } from './globalStyles'

const LinkColor = '#052B54';
const OutwardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LaunchDiv = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 20px 15px 20px;
  background-color: white;
  margin-bottom: 50px;

  box-shadow: 0 0 6px rgba(0,0,0,0.35);
  overflow: hidden;
  border-radius: 0.3em;
  transform: translateZ(0);
  transition: all 0.5s ease;

  @media screen and (max-width: 1040px) {
    width: 44%;
  }
  @media screen and (max-width: 800px) {
    width: 42%;
  }
  @media screen and (max-width: 660px) {
    width: 100%; 
  }
`;

const Headings = styled.ul`
  width: inherit;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  & > li {
    margin-right: 15px;
  }

  @media screen and (max-width: 1040px) {
    width: 100%; 
  }

  @media screen and (max-width: 325px) {
    font-size: 0.9rem;
  }
`;

const MissionNumber = styled.li`
  font-weight: bold;
  font-size: 1rem;
`;

const Rocket = styled.li`
  color: #9F9F9F;
`;

const Details = styled.p`
  line-height: 1.2em;
  max-height: 3.6em; 
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WikiContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1.4em;
  margin-top: 10px;
`;

const Icon = styled(Img)`
  margin-right: 10px;
`;

const MissionLink = styled.a`
  ${UnderlineHover}
  font-size: 0.85em;
  text-decoration: none;
  font-weight: bold;
  color: ${LinkColor};
  margin-right: 10px;
`;

function MissionPanel() {
  const data = useStaticQuery(query); 
  const missionsArray = data.spacex.launchesPast;
  const imagesArray = data.images.nodes;
    
  return (
    <OutwardContainer id='test'>
      {missionsArray.map((launch, index) => {
        return (
          <LaunchDiv key={index}>
            <Img 
              fixed={imagesArray[index].childImageSharp.fixed} 
            />
            
            <Headings>
              <MissionNumber>Mission {`${index+1}`}</MissionNumber>
              <li>{new Date(launch.launch_date_local).getFullYear()}</li>
              <Rocket>{launch.rocket.rocket_name}</Rocket>
            </Headings>

            <Details>{launch.details}</Details>
            <WikiContainer>
              <Icon 
                fixed={data.icon.childImageSharp.fixed} 
              />
              {
                launch.links.wikipedia ? 
                <MissionLink href={launch.links.wikipedia} color={LinkColor}>Wikipedia</MissionLink> : ''
              }
              {
                launch.links.article_link ? 
                <MissionLink href={launch.links.article_link} color={LinkColor}>Article</MissionLink> : ''
              }
              {
                launch.links.video_link ? 
                <MissionLink href={launch.links.video_link} color={LinkColor}>Video</MissionLink> : ''
              }
            </WikiContainer>
          </LaunchDiv>
        )  
      })}  
    </OutwardContainer>
  )
}

const query = graphql`
query CharactersQuery {
  spacex {
    launchesPast(limit: 8) {
      mission_name
      launch_date_local
      links {
        wikipedia
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      details
    }
  }

  images: allFile(filter: {absolutePath: {regex: "/missionSigns/"}}) {
    nodes {
      childImageSharp {
        fixed (
            width: 200
        ) {
            ...GatsbyImageSharpFixed
        }
      }
    }
  }
  
  icon: file(relativePath: {eq: "blue-circle-icon.png"}) {
    id
    childImageSharp {
      fixed(
          width: 25
      ) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;

export default MissionPanel
