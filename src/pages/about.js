import React from 'react'
import Helmet from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Container from '../components/Container'
import Heading from '../components/Heading'
import Gravatar from '../components/Gravatar'

const Bio = props => {
  return (
    <div id="about-bio" className="grid-wrap" {...props}>
      <div className="grid grid--gutters sm-grid--full">
        <div className="grid-cell u-1of3 u-sm-full">
          <Gravatar />
        </div>
        <div className="grid-cell">
          {props.children}
        </div>
      </div>
    </div>
  )
}

const Experience = props => {
  return (
    <div id="about-experience" className="grid-wrap" {...props}>
      <Heading level="3">Experience</Heading>
      {props.children}
    </div>
  )
}

const Position = props => {
  const { title, company } = props
  const years = (props.end) ? props.start+' — '+props.end : props.start

  return (
    <div className="about-position grid grid--gutters grid--separator sm-grid--full">
      <div className="grid-cell u-1of3 u-sm-full">
        {years}
      </div>
      <div className="grid-cell">
        <Heading level="4">{title}</Heading>
        <Heading level="5">{company}</Heading>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const pageTitle = "About"
  const siteTitle = `${pageTitle} — ${meta.title}`

  return (
    <Container>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={siteTitle} />
      </Helmet>
      <div className="header-wrap">
        <Heading level="2" className="grid-wrap">{pageTitle}</Heading>
      </div>

      <Bio>
        <p>Jorge Mancheno is a product designer and front-end developer based in Brooklyn, NY. He&#39;s known for his love of Apple products, extensive sneaker collection, and appreciation of Marvel movies/shows.</p>
        <p>Jorge thrives in a collaborative environment. He&#39;s worked with various development teams over the years to bring early concepts from an initial prototype/wireframe stage to fully polished consumer and enterprise products. A designer first, Jorge also enjoys bringing ideas to life with production ready HTML, CSS, and on occasion JS.</p>
        <h5 className="heading">The Site</h5>
        <p>This version of the site was built from scratch using <OutboundLink href="https://www.gatsbyjs.org/" className="link-external" target="_blank">Gatsby</OutboundLink> and is hosted at <OutboundLink href="https://www.digitalocean.com/" className="link-external" target="_blank">DigitalOcean</OutboundLink>. You can view it&#39;s source code on <OutboundLink href="https://github.com/jorgemancheno/jorgemancheno.com" className="link-external" target="_blank">GitHub</OutboundLink>.</p>
      </Bio>

      <Experience>
        <Position start="2013" end="2017"
                  title="Principle UI Designer"
                  company="AOL Inc">
          <p>Designed AOL&#39;s replacement for Google Reader which included a marketing site, and responsive web/mobile versions of the RSS reader interface. The responsive web interface and feature set was constantly evolving based on user feedback, and later versions adopted a more modern look and feel.</p>
          <p>Designed adaptive web interfaces for AOL&#39;s Content Hub platform which was an enterprise-ready set of tools for creating, consuming, and monetizing publisher content. Developed and maintained guidelines for every interface component used in the platform. Led efforts to have other products under the AOL Publishers umbrella adopt the look and feel used by Content Hub.</p>
          <p>Lead design for a news consumption app built for iOS and Android that featured the ability to create custom news channels a user could follow and share with other users, built-in chat, and alarm clock functionality. Worked with an outside vendor to iterate through the design and helped oversee its development.</p>
          <p>Worked closely with the Athena product team on the Athena Content Services platform, a reimagining of AOL Publishers. Lead design for the platform as a whole, helped develop the Athena Owl branding, and consulted on the marketing site. Designed and developed an HTML/CSS framework for the Athena suite of products.</p>
        </Position>

        <Position start="2010" end="2013"
                  title="Principle UI Designer"
                  company="AOL Inc / Pictela Inc">
          <p>Iterated on the design of Pictela&#39;s ad formats following the company&#39;s acquisition by AOL Inc in late-2010. Creative direction for AOL&#39;s Project Devil ad format was taken over, and an overall visual treatment for all of the supported ad units was established. Styleguides defining each ad format&#39;s configuration and best use practices were created and later distributed to publishers looking to adopt Pictela ads. Consulted on the design of additional ad units later on.</p>
          <p>Designed and contributed to the development of version 3 of the Pictela Management Console. Work included the design of workflows used for managing campaigns, assets, ad units, and a tool that generated exportable reports based on user input.</p>
          <p>Designed Pictela&#39;s updated branding which was used on the web and in print. As part of the rebranding, Pictela&#39;s marketing site was redesigned and rebuilt from scratch. Also designed a few t-shirts that incorporated the updated branding.</p>
        </Position>

        <Position start="2010"
                  title="Senior Designer"
                  company="Pictela Inc">
          <p>Designed an updated visual treatment for Pictela&#39;s initial ad template offering based on standard IAB sizes, and an early visual treatment for version 2 of the Pictela Management Console, which was used to create and manage ad units on the platform prior to the company&#39;s acquisition by AOL Inc in late-2010.</p>
        </Position>

        <Position start="2007" end="2010"
                  title="Senior Visual/Web Designer"
                  company="Lime Wire LLC">
          <p>Designed and developed much of LimeWire&#39;s online marketing site (LimeWire.com), and it&#39;s developer-friendly portal (LimeWire.org). Work on LimeWire.com included overall creative direction, design of marketing materials, and front-end development of most of the site. LimeWire.org featured custom designed and built themes for its blog (Wordpress), user forums (vBulletin), and wiki (MediaWiki).</p>
          <p>Designed and contributed to the development of the promotional platform used within the LimeWire P2P client. Designed materials meant to educate LimeWire&#39;s users on advanced and Pro features, which were seen by thousands of users daily. Also designed the custom icon set and splash screens used in version 5 of the LimeWire P2P client.</p>
          <p>Worked with the rest of the in-house design team on Grapevine, an unreleased online music streaming service similar to Apple Music and Spotify. Designed wireframes for several portions of the service, and multiple visual treatments for the application. Also contributed to the development of an HTML5 prototype used for testing of designed components.</p>
        </Position>

        <Position start="2006" end="2007"
                  title="Visual/Web Designer"
                  company="Lime Spot LLC">
          <p>Worked as part of a small team early on that was building a social networking site targeting independent music artists to help them establish an online presence. Designed the user interface of the LimeSpot web application including a custom icon set used throughout, and aided in its front-end development. Also designed themes meant to be used by LimeSpot-powered sites.</p>
        </Position>

      </Experience>
    </Container>
  )
}

export const query = graphql `
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
