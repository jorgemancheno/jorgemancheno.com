import React from 'react'
import Obfuscate from 'react-obfuscate'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Svg from './Svg'

const LinkContainer = props => {
  return (
    <li>
      {props.children}
    </li>
  )
}

const LinkTypes = {
  dribbble(props) {
    return (
      <OutboundLink href={props.url} className="link-external svg-link svg-link--dribbble" target="_blank">
        <Svg type="socialDribbble" className="svg-icon--lg" />
      </OutboundLink>
    )
  },
  github(props) {
    return (
      <OutboundLink href={props.url} className="link-external svg-link svg-link--github" target="_blank">
        <Svg type="socialGithub" className="svg-icon--lg" />
      </OutboundLink>
    )
  },
  twitter(props) {
    return (
      <OutboundLink href={props.url} className="link-external svg-link svg-link--twitter" target="_blank">
        <Svg type="socialTwitter" className="svg-icon--lg" />
      </OutboundLink>
    )
  },
  mail(props) {
    return (
      <Obfuscate email={props.url} className="svg-link">
        <Svg type="socialMail" className="svg-icon--lg" />
      </Obfuscate>
    )
  }
}

export default ({type, ...rest}) => {
  const LinkType = LinkTypes[type]

  return (
    <LinkContainer>
      <LinkType {...rest}/>
    </LinkContainer>
  )
}
