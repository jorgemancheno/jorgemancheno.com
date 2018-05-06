import React from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Header from '../components/Header'
import Heading from '../components/Heading'
import ProjectCards from '../components/ProjectCards'
import Button from '../components/Button'

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const { edges: projects } = data.projects
  const { edges: archive } = data.archive
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

      <Header className="grid-wrap">
        <Heading level="3">Archived Projects</Heading>
        <Button type="link" to="/projects/archive/" className="button--outline button--sm u-sm-full">View Archived</Button>
      </Header>

      <ProjectCards projects={archive} />
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
    projects: allMarkdownRemark(
      sort: {fields: [frontmatter___id], order: DESC}
      filter: { frontmatter: { archive: { ne: true } } }
    ) {
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
    archive: allMarkdownRemark(
      limit: 2
      sort: {fields: [frontmatter___id], order: DESC}
      filter: { frontmatter: { archive: { ne: false } } }
    ) {
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
