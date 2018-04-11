import React from 'react'

import ProjectCard from './ProjectCard'

const ProjectCards = props => {
  return (
    <div className="projects grid-wrap" {...props}>
      <div className="grid grid--gutters">
        {props.children}
      </div>
    </div>
  )
}

export default (props) => {
  const { projects, ...rest } = props

  return (
    <ProjectCards {...rest}>
    {projects.map(({ node }, i) => (
      <div key={i} className="grid-cell u-full u-md-1of2 u-lg-1of2">
        <ProjectCard slug={node.fields.slug}
                     title={node.frontmatter.title}
                     client={node.frontmatter.client}
                     thumbnail={node.frontmatter.thumbnail} />
      </div>
    ))}
    </ProjectCards>
  )
}
