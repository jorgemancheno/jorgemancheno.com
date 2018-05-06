import React from 'react'

export default (props) => {
  const { type, className, ...rest } = props
  let classes = 'input'

  if (className !== undefined) {
    classes = classes + ' ' + className
  }

  if (type === "textarea") {
    return (
      <textarea className={classes} {...rest}></textarea>
    )
  } else {
    return (
      <input className={classes} {...rest} />
    )
  }
}
