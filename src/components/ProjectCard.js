import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import Heading from './Heading'

const CardThumbnail = props => {
  const { slug, src, ...rest } = props
  const { sizes } = (src && src.childImageSharp) ? src.childImageSharp : {}

  return (
    <div className="card-thumbnail">
      {sizes && (
        <Img sizes={sizes} />
      )}
    </div>
  )
}

export default (props) => {
  const { slug, title, client, thumbnail, ...rest } = props

  return (
    <div className="card" {...rest}>
      <CardThumbnail src={thumbnail}
                     slug={slug} />

      <Link to={slug} className="card-link">
        <hgroup className="invert card-details">
          <Heading level="4" className="card-details-name">{title}</Heading>
          <Heading level="5" className="card-details-client">{client}</Heading>
        </hgroup>
      </Link>
    </div>
  )
}
