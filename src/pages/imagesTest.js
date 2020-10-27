import React from "react"
import { useStaticQuery, graphql, } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Photos = () => {
    // const data = useStaticQuery(graphql`
    //   query Images {
    //     image: file(relativePath: {eq: "sign3.png"}) {
    //       id
    //       childImageSharp {
    //         fixed(
    //             width: 200
    //         ) {
    //           ...GatsbyImageSharpFixed
    //         }
    //         fluid {
    //           ...GatsbyImageSharpFluid
    //         }
    //       }
    //     }
    //   }
    
    // `);

    const imagesData = useStaticQuery(graphql`
      query Images {
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
      }
    `);
    
    const imagesArray = imagesData.images.nodes
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Photos!</h1>
            {imagesArray.map(image => {
                return (
                    <Img 
                        fixed={image.childImageSharp.fixed}
                    />
                )
            })}
        </Layout>
    )
}

export default Photos
