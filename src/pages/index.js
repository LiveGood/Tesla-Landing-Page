import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BGVideo from "../components/bgvideo"
import InfoPanel from "../components/infoPanel"
import CenterLabel from "../components/centerLabel"
import { MiddleHeading } from "../components/globalStyles"
import MissionPanel from "../components/missionPanel"
import styles from '../components/layout.css'

const IndexPage = ({ data }) => {
  const headings = data.headings.edges[0].node.childDataJson.headings

  return (
    <Layout>
      <SEO title="Home" />
      <BGVideo rows={headings[0].rows}/>
    
      <CenterLabel 
        rows={headings[1].rows}
        id="heading2"
        textColor="black"
        initialFont={1.2}
        inheritCSSHeading={MiddleHeading}
      />
      <InfoPanel />
      <CenterLabel 
        rows={headings[2].rows}
        id="heading3"
        textColor="black"
        initialFont={1.3}
      />
      <MissionPanel />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }

    headings: allFile (filter: { 
      name: { eq : "headings" } 
      sourceInstanceName: { eq : "data" }
    }) {
      edges {
        node {
          childDataJson {
            headings {
              rows
            }
          }
        }
      }
    } 
  }
`

export default IndexPage
