import React from 'react'
import Link from 'gatsby-link'

import Navigation from './Navigation'

const FooterCopyright = props => {
  const year = (new Date().getFullYear())

  return (
    <div id="footer-copyright" {...props}>
      &copy; {year}, <Link to="/">Jorge Mancheno</Link>
    </div>
  )
}

export default () => {
  return (
    <footer id="site-footer" className="grid-wrap">
      <div id="site-footer-content">
        <Navigation location="footer" />
        <FooterCopyright />
      </div>
    </footer>
  )
}
