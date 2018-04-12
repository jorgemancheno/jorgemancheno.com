import React from 'react'
import Obfuscate from 'react-obfuscate'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { ReactComponent as DribbbleIcon } from '../images/social/dribbble.svg'
import { ReactComponent as GithubIcon } from '../images/social/github.svg'
import { ReactComponent as TwitterIcon } from '../images/social/twitter.svg'
import { ReactComponent as MailIcon } from '../images/social/mail.svg'

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
      <OutboundLink href={props.url} className="svg-link svg-link--dribbble" target="_blank">
        <DribbbleIcon className="svg-icon" />
      </OutboundLink>
    )
  },
  github(props) {
    return (
      <OutboundLink href={props.url} className="svg-link svg-link--github" target="_blank">
        <GithubIcon className="svg-icon" />
      </OutboundLink>
    )
  },
  twitter(props) {
    return (
      <OutboundLink href={props.url} className="svg-link svg-link--twitter" target="_blank">
        <TwitterIcon className="svg-icon" />
      </OutboundLink>
    )
  },
  mail(props) {
    return (
      <Obfuscate email={props.url} className="svg-link svg-link--mail">
        <MailIcon className="svg-icon" />
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
