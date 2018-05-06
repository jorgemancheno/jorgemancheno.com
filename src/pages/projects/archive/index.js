import React from 'react'
import Helmet from 'react-helmet'

import Container from '../../../components/Container'
import Header from '../../../components/Header'
import Heading from '../../../components/Heading'
import ProjectCards from '../../../components/ProjectCards'
import Button from '../../../components/Button'

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const { edges: archive } = data.archive
  const pageTitle = "Archived Projects"
  const siteTitle = `${pageTitle} — ${meta.title}`

  return (
    <Container>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={siteTitle} />
      </Helmet>
      <div className="header-wrap">
        <Header className="grid-wrap">
          <Heading level="2">{pageTitle}</Heading>
          <Button type="link" to="/projects/" className="button--outline button--sm u-sm-full">More Projects</Button>
        </Header>
      </div>

      <ProjectCards projects={archive} />
    </Container>
  )
}

export const query = graphql `
  query ProjectsArchiveQuery {
    site {
      siteMetadata {
        title
      }
    }
    archive: allMarkdownRemark(
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
