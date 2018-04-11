import React from 'react'

export default (props) => {
  const Url = "//s.gravatar.com/avatar"
  const Hash = "90fd4cc7a8a2b5c469a921a14369a1ac"
  const Size = 280

  return (
    <img src={`${Url}/${Hash}?s=${Size}`}
         size={Size}
         alt="Gravatar"
         className="gravatar" {...props} />
  )
}
