import React from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Heading from '../components/Heading'
import ProjectCards from '../components/ProjectCards'

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const { edges: projects } = data.allMarkdownRemark
  const pageTitle = "Projects"
  const siteTitle = `${pageTitle} — ${meta.title}`

  return (
    <Container>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={siteTitle} />
      </Helmet>
      <div className="header-wrap">
        <Heading level="2" className="grid-wrap">{pageTitle}</Heading>
      </div>

      <ProjectCards projects={projects} />
    </Container>
  )
}

export const query = graphql `
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___id], order: DESC}) {
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
