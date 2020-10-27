import React from 'react'
import Tesla from '../videos/tesla.mp4'
import styled from 'styled-components'

import CenterLabel from "./centerLabel"

const VideoContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const BGVideo = ({ rows } ) => {
  return (
    <VideoContainer id="videoContainer" >
      <Video autoPlay loop muted>
      <source src={Tesla} type="video/mp4" />
    </Video>
    <CenterLabel 
        rows={rows}
        id="heading1"
        textColor="white"
        initialFont={1.8}
      />
    </VideoContainer>
  )
}

export default BGVideo