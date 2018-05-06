import React from 'react'

const Type = {
  h1(props) {
    return (
      <h1 {...props}>
        <span>{props.children}</span>
      </h1>
    )
  },
  h2(props) {
    return (
      <h2 {...props}>
        <span>{props.children}</span>
      </h2>
    )
  },
  h3(props) {
    return (
      <h3 {...props}>
        <span>{props.children}</span>
      </h3>
    )
  },
  h4(props) {
    return (
      <h4 {...props}>
        <span>{props.children}</span>
      </h4>
    )
  },
  h5(props) {
    return (
      <h5 {...props}>
        <span>{props.children}</span>
      </h5>
    )
  },
  h6(props) {
    return (
      <h6 {...props}>
        <span>{props.children}</span>
      </h6>
    )
  }
}

export default (props) => {
  const { level, className, ...rest } = props
  const Heading = Type['h' + level]
  let classes = 'heading'

  if (className !== undefined) {
    classes = classes + ' ' + className
  }

  return (
    <Heading className={classes} {...rest}>
      {rest.children}
    </Heading>
  )
}
