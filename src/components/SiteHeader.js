import React from 'react'
import Link from 'gatsby-link'

import Logo from './Logo'
import Navigation from './Navigation'
import SocialIcons from './SocialIcons'

export default (props) => {
  return (
    <header id="site-header" >
      <div id="site-header-content">
        <Logo />
        <Navigation location="header" />
        <SocialIcons {...props} />
      </div>
    </header>
  )
}
