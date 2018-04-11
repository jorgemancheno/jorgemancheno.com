import React from 'react'
import Link from 'gatsby-link'

const NavContainer = props => {
  const { location, ...rest } = props
  const id = (location === 'header') ? 'header-nav' : 'footer-nav'

  return (
    <nav id={id} {...rest}>
      <ul>
        {props.children}
      </ul>
    </nav>
  )
}

const NavLink = props => {
  return (
    <li {...props}>
      <Link to={props.to} activeClassName="selected">
        {props.children}
      </Link>
    </li>
  )
}

export default (props) => {
  return (
    <NavContainer {...props}>
      <NavLink to="/projects/">Projects</NavLink>
      <NavLink to="/about/">About</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
    </NavContainer>
  )
}
