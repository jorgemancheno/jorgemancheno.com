import React from 'react'
import Link from 'gatsby-link'

import Svg from '../components/Svg'

export default () => {
  return (
    <h1 id="header-logo">
      <Link to="/" className="svg-link">
        <Svg type="JM" className="svg-icon--autoSize" />
      </Link>
    </h1>
  )
}
