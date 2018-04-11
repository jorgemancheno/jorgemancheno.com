import React from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Heading from '../components/Heading'

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const pageTitle = "Not Found"
  const siteTitle = `${pageTitle} — ${meta.title}`

  return (
    <Container>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={siteTitle} />
      </Helmet>
      <div className="header-wrap">
        <Heading level="2" className="grid-wrap">{pageTitle}</Heading>
      </div>

      <div className="grid-wrap">
        <p>It doesn&#39;t look like that page exists! Check the address and try again.</p>
      </div>
    </Container>
  )
}

export const query = graphql `
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
