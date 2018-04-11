import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Container from '../components/Container'
import Header from '../components/Header'
import Heading from '../components/Heading'
import ProjectCards from '../components/ProjectCards'
import Button from '../components/Button'

export default ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark
  const pageTitle = "Welcome"
  const { twitterUrl } = data.site.siteMetadata

  return (
    <Container>
      <div className="header-wrap">
        <Heading level="2" className="grid-wrap">{pageTitle}</Heading>
      </div>

      <div id="welcome">
        <div className="grid-wrap">
          <p>Jorge Mancheno is a product designer based in Brooklyn, NY. You can <Link to="/contact/">say hello</Link>, <OutboundLink href={twitterUrl} target="_blank">follow him</OutboundLink>, or <Link to="/projects/">see his work</Link>.</p>
        </div>
      </div>

      <Header className="grid-wrap">
        <Heading level="3">Recent Projects</Heading>
        <Button type="link" to="/projects/" className="button--outline button--sm u-sm-full">View All</Button>
      </Header>

      <ProjectCards projects={projects} />
    </Container>
  )
}

export const query = graphql `
  query IndexQuery {
    site {
      siteMetadata {
        twitterUrl
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___id], order: DESC}, limit: 2) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            client
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 650) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
