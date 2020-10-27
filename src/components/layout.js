/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, } from "gatsby"
import styled from 'styled-components';

import Header from "./header"
import Footer from "./footer"
import { Container } from './globalStyles'

const SiteWrapper = styled(Container)`
  /* Add more css if needed */
  ${Container}
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <SiteWrapper style={{backgroundColor: '#F7F7F7'}}>
        <main>{children}</main>
      </SiteWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
