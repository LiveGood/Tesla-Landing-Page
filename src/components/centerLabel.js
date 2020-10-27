import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const LabelWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0;  

  /* TODO: Find a smarter way to do this. */
  font-size: ${props => {
    if (props.screenSize.width > 960) return props.initialFont + 'rem'
    if (props.screenSize.width < 330) return '0.6rem'
    if (props.screenSize.width < 420) return '0.65rem'
    if (props.screenSize.width < 420) return '0.65rem'
    if (props.screenSize.width < 480) return '0.75rem'
    if (props.screenSize.width < 575) return '0.9rem'
    if (props.screenSize.width < 670) return '1.1rem'
    if (props.screenSize.width < 775) return Math.min(1.2, props.initialFont) + 'rem'
    if (props.screenSize.width < 840) return Math.min(1.3, props.initialFont) + 'rem'
    if (props.screenSize.width < 960) return Math.min(1.5, props.initialFont) + 'rem'
  }};

  transition: font 0.3s ease;
  ${props => props.inheritCSSDiv ? props.inheritCSSDiv : ''}
`;

const Label = styled.h1`
  ${props => props.inheritCSSHeading ? props.inheritCSSHeading : ''}

  color: ${props => props.textColor};
  display: block;
  margin: 8px 0; 
  line-height: 1.3em;

  @media screen and (max-width: 1040px) {
    line-height: 1.15em;
  }

  @media screen and (max-width: 420px) {
    margin: 0;
  }
`;

function CenterLabel({ rows, textColor, initialFont, marginTop, id, inheritCSSDiv, inheritCSSHeading }) { 
  const [resolution, setResoultion] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setResoultion({
        width: window.innerWidth,
        height: window.innerHeight
      })
    })
  }, [])

  return (
    <LabelWrapper inheritCSSDiv={inheritCSSDiv} marginTop={marginTop} screenSize={resolution} id={id}  initialFont={initialFont}>
        {rows.map((text, index) => (
           <Label textColor={textColor} key={index} inheritCSSHeading={inheritCSSHeading}>
            {text}
          </Label>   
        ))}
    </LabelWrapper>
  )
}

export default CenterLabel
