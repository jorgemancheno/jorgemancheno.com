import React from 'react'
import SiteFooter from './SiteFooter'

export default (props) => {
  return (
    <section id="container" {...props}>
      <div id="container-content">
        {props.children}
      </div>
      <SiteFooter />
    </section>
  )
}
