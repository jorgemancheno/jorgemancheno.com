import React from 'react'
import Link from 'gatsby-link'

const Type = {
  link(props) {
    return(
      <Link to={props.children} {...props}>
        {props.children}
      </Link>
    )
  },
  input(props) {
    return(
      <input type="button" {...props} value={props.children} />
    )
  },
  button(props) {
    return(
      <button {...props}>
        {props.children}
      </button>
    )
  }
}

export default (props) => {
  const { className, ...rest } = props
  const type = (props.type !== undefined) ? props.type : 'button'
  const Button = Type[type]
  var classes = 'button'

  if (className !== undefined) {
    classes = classes + ' ' + className
  }

  return (
    <Button className={classes} {...rest}>
      {props.children}
    </Button>
  )
}
