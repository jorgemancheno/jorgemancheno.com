import React from 'react'
import SocialLink from './SocialLink'

const SocialContainer = props => {
  return (
    <ul id="header-social">
      {props.children}
    </ul>
  )
}

export default (props) => {
  const { email, dribbbleUrl, githubUrl, twitterUrl, ...rest } = props

  return (
    <SocialContainer>
      <SocialLink type="dribbble" url={dribbbleUrl} {...rest} />
      <SocialLink type="github" url={githubUrl} {...rest} />
      <SocialLink type="twitter" url={twitterUrl} {...rest} />
      <SocialLink type="mail" url={email} {...rest} />
    </SocialContainer>
  )
}
