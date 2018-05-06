import React from 'react'

export default (props) => {
  const { className, ...rest } = props
  let classes = 'header'

  if (className !== undefined) {
    classes = classes + ' ' + className
  }

  return (
    <header className={classes} {...rest}>
      {props.children}
    </header>
  )
}
