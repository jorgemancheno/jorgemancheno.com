import React from 'react'
import Obfuscate from 'react-obfuscate'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import DribbbleIcon from '../images/social/dribbble.svg'
import GithubIcon from '../images/social/github.svg'
import TwitterIcon from '../images/social/twitter.svg'
import MailIcon from '../images/social/mail.svg'

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
      <OutboundLink href={props.url} target="_blank">
        <img src={DribbbleIcon} />
      </OutboundLink>
    )
  },
  github(props) {
    return (
      <OutboundLink href={props.url} target="_blank">
        <img src={GithubIcon} />
      </OutboundLink>
    )
  },
  twitter(props) {
    return (
      <OutboundLink href={props.url} target="_blank">
        <img src={TwitterIcon} />
      </OutboundLink>
    )
  },
  mail(props) {
    return (
      <Obfuscate email={props.url}>
        <img src={MailIcon} />
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
