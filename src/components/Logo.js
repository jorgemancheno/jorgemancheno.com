import React from 'react'
import Link from 'gatsby-link'

import { ReactComponent as JM } from '../images/JM.svg'

export default () => {
  return (
    <h1 id="header-logo">
      <Link to="/" className="svg-link">
        <JM className="svg-icon svg-icon--autoSize" />
      </Link>
    </h1>
  )
}
