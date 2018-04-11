import React from 'react'
import Link from 'gatsby-link'

import Logo from '../images/JM.svg'

export default () => {
  return (
    <h1 id="header-logo">
      <Link to="/">
        <img src={Logo} alt="Jorge Mancheno" />
      </Link>
    </h1>
  )
}
