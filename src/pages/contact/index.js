import React from 'react'
import Helmet from 'react-helmet'
import Obfuscate from 'react-obfuscate'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import Input from '../../components/Input'

const ContactDetails = props => {
  const { email, dribbbleUrl, githubUrl, twitterUrl } = props

  return (
    <div id="contact-details" className="grid-wrap">
      <p><strong>Need to get in touch or just want to say hello?</strong> You can <Obfuscate email={email}>email me</Obfuscate> directly or by using the form below. I&#39;m also on <OutboundLink href={dribbbleUrl} className="link-external" target="_blank">Dribbble</OutboundLink>, <OutboundLink href={githubUrl} className="link-external" target="_blank">GitHub</OutboundLink>, and <OutboundLink href={twitterUrl} className="link-external" target="_blank">Twitter</OutboundLink>.</p>
    </div>
  )
}

const ContactForm = props => {
  const { action, next, ...rest } = props

  return (
    <div className="grid-wrap" {...rest}>
      <form className="contact-form form" action={action} method="POST">
        <input type="hidden" name="_next" value={next} />

        <p className="grid grid--center sm-grid--full">
          <label className="label label--md grid-cell grid-cell--autoSize">Hi, my name is</label>
          <Input type="text" name="name" placeholder="Full Name" className="input--md grid-cell" required />
        </p>
        <p className="grid grid--full">
          <Input type="textarea" name="message" placeholder="How Can I Help You?" className="input--md grid-cell" required />
        </p>
        <p className="grid grid--center sm-grid--full">
          <label className="label label--md grid-cell grid-cell--autoSize">I can be reached at</label>
          <Input type="email" name="_replyto" placeholder="Email Address" className="input--md grid-cell" required />
        </p>

        <Button className="button--outline button--md u-sm-full">Send Message</Button>
      </form>
    </div>
  )
}

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const { siteUrl, email, dribbbleUrl, githubUrl, twitterUrl } = meta
  const pageTitle = "Contact"
  const siteTitle = `${pageTitle} — ${meta.title}`
  const action = `https://formspree.io/${email}`
  const next = `${siteUrl}/contact/thanks/`

  return (
    <Container>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={siteTitle} />
      </Helmet>
      <div className="header-wrap">
        <Heading level="2" className="grid-wrap">{pageTitle}</Heading>
      </div>

      <ContactDetails email={email} dribbbleUrl={dribbbleUrl} githubUrl={githubUrl} twitterUrl={twitterUrl} />
      <ContactForm action={action} next={next} />

    </Container>
  )
}

export const query = graphql `
  query ContactQuery {
    site {
      siteMetadata {
        title
        siteUrl
        email
        dribbbleUrl
        githubUrl
        twitterUrl
      }
    }
  }
`
