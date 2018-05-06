import React from 'react'

import { ReactComponent as JMLogo } from '../images/JM.svg'

import { ReactComponent as ArrowUpIcon } from '../images/icons/arrow-up.svg'
import { ReactComponent as ArrowRightIcon } from '../images/icons/arrow-right.svg'
import { ReactComponent as ArrowDownIcon } from '../images/icons/arrow-down.svg'
import { ReactComponent as ArrowLeftIcon } from '../images/icons/arrow-left.svg'

import { ReactComponent as SocialDribbbleIcon } from '../images/icons/social-dribbble.svg'
import { ReactComponent as SocialGithubIcon } from '../images/icons/social-github.svg'
import { ReactComponent as SocialTwitterIcon } from '../images/icons/social-twitter.svg'
import { ReactComponent as SocialMailIcon } from '../images/icons/social-mail.svg'

const Type = {
  JM(props) {
    return <JMLogo {...props} />
  },
  arrowUp(props) {
    return <ArrowUpIcon {...props} />
  },
  arrowRight(props) {
    return <ArrowRightIcon {...props} />
  },
  arrowDown(props) {
    return <ArrowDownIcon {...props} />
  },
  arrowLeft(props) {
    return <ArrowLeftIcon {...props} />
  },
  socialDribbble(props) {
    return <SocialDribbbleIcon {...props} />
  },
  socialGithub(props) {
    return <SocialGithubIcon {...props} />
  },
  socialTwitter(props) {
    return <SocialTwitterIcon {...props} />
  },
  socialMail(props) {
    return <SocialMailIcon {...props} />
  },
}

export default ({ type, className, ...rest }) => {
  const Svg = Type[type]

  if (typeof Svg === 'function') {
    let classes = 'svg-icon'

    if (className !== undefined) {
      classes = classes + ' ' + className
    }

    return (
      <Svg className={classes} {...rest} />
    )
  }
  return null
}
