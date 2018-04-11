import React from 'react'
import Helmet from 'react-helmet'

import Container from '../../components/Container'
import Heading from '../../components/Heading'

const ContactThanks = () => {
  return (
    <div id="contact-details" className="grid-wrap">
      <p><strong>Thank you for the email!</strong> You should hear from me shortly.</p>
    </div>
  )
}
export default ({ data }) => {
  const meta = data.site.siteMetadata
  const pageTitle = "Thanks!"
  const siteTitle = `${pageTitle} — ${meta.title}`

  return (
    <Container>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={siteTitle} />
      </Helmet>
      <div className="header-wrap">
        <Heading level="2" className="grid-wrap">{pageTitle}</Heading>
      </div>

      <ContactThanks />
    </Container>
  )
}

export const query = graphql `
  query ContactThanksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
