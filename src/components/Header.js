import React from 'react'

export default (props) => {
  const { className, ...rest } = props
  var classes = 'header'

  if (className !== undefined) {
    classes = classes + ' ' + className
  }

  return (
    <header className={classes} {...rest}>
      {props.children}
    </header>
  )
}
