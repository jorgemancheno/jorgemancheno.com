import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SiteHeader from '../components/SiteHeader'

import reset from 'reset-css'
import '../css/index.scss'

import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import coverImage from '../images/cover.png'
import logoSVG from '../images/JM.svg'

const DefaultLayout = props => {
  const { children, data, location } = props
  const pathname = location.pathname
  const isHomepage = pathname == '/'
  const isProjects = pathname.slice(0,10) == '/projects/'
  const isAbout = pathname.slice(0,7) == '/about/'
  const isContact = pathname.slice(0,9) == '/contact/'
  const meta = data.site.siteMetadata
  const { email, dribbbleUrl, githubUrl, twitterUrl } = meta

  let coverUrl
  if (process.env.NODE_ENV === 'production') {
    coverUrl = meta.siteUrl + coverImage
  } else {
    coverUrl = coverImage
  }

  return (
    <div id="root">
      <Helmet defaultTitle={meta.title} titleTemplate={`%s — ${meta.title}`}>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={coverUrl} />
        <meta property="og:url" content={`${meta.siteUrl}${pathname}`} />
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:creator" content={meta.twitterHandle} />
        <meta name="robots" content="index,nofollow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="icon"
              type="16x16"
              sizes="16x16"
              href={favicon16} />
        <link rel="icon"
              type="32x32"
              sizes="32x32"
              href={favicon32} />
        <link rel="mask-icon"
              color="#0B0E13"
              href={logoSVG} />
        <link rel="canonical" href={`${meta.siteUrl}${pathname}`} />
        <html lang="en" />
        {isAbout && (
          <body className="invert" />
        )}
      </Helmet>

      <SiteHeader email={email} dribbbleUrl={dribbbleUrl} githubUrl={githubUrl} twitterUrl={twitterUrl} />
      {children()}
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.func,
}

export default DefaultLayout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        email
        dribbbleUrl
        githubUrl
        twitterUrl
        twitterHandle
      }
    }
  }
`
