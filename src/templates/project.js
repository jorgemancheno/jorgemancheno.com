import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Container from '../components/Container'
import Header from '../components/Header'
import Heading from '../components/Heading'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import Svg from '../components/Svg'

const ProjectCover = props => {
  const { src, ...rest } = props
  const { sizes } = (src && src.childImageSharp) ? src.childImageSharp : {}

  return (
    <div className="project-cover" {...rest}>
      {src && (
        <Img sizes={sizes} />
      )}
    </div>
  )
}

const ProjectMeta = props => {
  const { client, role, ...rest } = props

  return (
    <dl className="grid-cell u-1of3 u-sm-full" {...rest}>
      <dt>Client</dt>
      <dd>{client}</dd>
      <dt>Role</dt>
      <dd>{role}</dd>
    </dl>
  )
}

const ProjectDescription = props => {
  const { html, ...rest } = props
  return (
    <div className="grid-cell" dangerouslySetInnerHTML={{ __html: html }} {...rest} />
  )
}

const ProjectDetails = props => {
  return (
    <div className="project-details grid-wrap" {...props}>
      <div className="grid grid--gutters sm-grid--full">
        {props.children}
      </div>
    </div>
  )
}

const getFeatures = (data) => {
  const features = []
  const filtered = Object.keys(data)
                         .filter(key => /^feature/.test(key))
                         .reduce((obj, key) => {
                           if (data[key] !== null) features.push(data[key])
                           return obj
                         }, {})

  return features
}

const ProjectFeatures = props => {
  const { features, className, ...rest } = props
  let classes = 'project-features grid grid--gutters sm-grid--full md-grid--full'

  if (className !== undefined) {
    classes = classes + ' ' + className
  }

  return (
    <div className={classes} {...rest}>
      {features.map((feature, i) => {
        if (features.length > 2 && (i > 0 && i <= 2)) {
          return (
            <ProjectFeature key={i} src={feature} className="u-sm--full" />
          )
        } else {
          return (
            <ProjectFeature key={i} src={feature} className="u-full" />
          )
        }
      })}
    </div>
  )
}

const ProjectFeature = props => {
  const { src, className, ...rest } = props
  const { sizes } = (src && src.childImageSharp) ? src.childImageSharp : {}
  let classes = 'project-feature grid-cell'

  if (className !== undefined) {
    classes = classes + ' ' + className
  }

  return (
    <div className={classes} {...rest}>
      {src && (
        <Img sizes={sizes} />
      )}
    </div>
  )
}

const ProjectPagination = props => {
  return (
    <div className="project-pagination grid-wrap" {...props}>
      <div className="grid grid--gutters sm-grid--full">
        {props.children}
      </div>
    </div>
  )
}

const ProjectPaginationButton = props => {
  const { type, ...rest } = props
  const title = (type === 'prev') ? 'Previous Project' : 'Next Project'

  return (
    <div className="grid-cell" {...rest}>
      <Heading level="3">{title}</Heading>
      {props.children}
    </div>
  )
}

export default ({ data, location, pathContext }) => {
  const { project, prev, next } = data
  const { frontmatter, html } = project
  const { title, client, role, thumbnail, cover, theme_color } = frontmatter
  const features = getFeatures(frontmatter)
  const isArchive = location.pathname.slice(9,18) == '/archive/'
  const meta = data.site.siteMetadata
  const siteTitle = `${title} — ${meta.title}`

  let description = html.replace(/<[^>]+>/g, '')
  
  let thumbnailUrl
  let thumbnailImage = thumbnail.childImageSharp.sizes.src
  if (process.env.NODE_ENV === 'production') {
    thumbnailUrl = meta.siteUrl + thumbnailImage
  } else {
    thumbnailUrl = thumbnailImage
  }

  let more = {}
  if (isArchive) {
    more = {
      label: 'More Archived',
      location: '/projects/archive/',
    }
  } else {
    more = {
      label: 'More Projects',
      location: '/projects/',
    }
  }

  return (
    <Container>
      <Helmet title={title}>
        <meta name="description" content={description} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnailUrl} />
        {theme_color && (
        <style type="text/css">{`
          #header-logo svg path {
            fill: ${theme_color};
          }
          #header-logo a:hover {
            opacity: 0.8;
          }
          #header-logo a:active,
          #header-logo a:active:hover {
            opacity: 1;
          }
        `}</style>
        )}
      </Helmet>
      <div className="header-wrap">
        <Header className="grid-wrap">
          <Heading level="2">{title}</Heading>
          <div className="button-group grid grid--gutters">
            <div className="grid-cell">
              <Button type="link" to={more.location} className="button--outline button--sm u-sm-full">{more.label}</Button>
            </div>
            <div className="button-group grid-cell u-sm-1of2">
              {prev && (
              <Button type="link" to={prev.fields.slug} className="button--outline button--sm u-sm-1of2 svg-link"><Svg type="arrowLeft" /></Button>
              )}
              {next && (
                <Button type="link" to={next.fields.slug} className="button--outline button--sm u-sm-1of2 svg-link"><Svg type="arrowRight" /></Button>
              )}
            </div>
          </div>
        </Header>
      </div>

      {cover && (
        <ProjectCover src={cover} />
      )}

      <ProjectDetails>
        <ProjectMeta client={client}
                     role={role} />
        <ProjectDescription html={html} />
      </ProjectDetails>

      <ProjectFeatures features={features} />

      <ProjectPagination>
      {prev && (
        <ProjectPaginationButton type="prev">
          <ProjectCard slug={prev.fields.slug}
                       title={prev.frontmatter.title}
                       client={prev.frontmatter.client}
                       thumbnail={prev.frontmatter.thumbnail} />
        </ProjectPaginationButton>
      )}
      {next && (
        <ProjectPaginationButton type="next">
          <ProjectCard slug={next.fields.slug}
                       title={next.frontmatter.title}
                       client={next.frontmatter.client}
                       thumbnail={next.frontmatter.thumbnail} />
        </ProjectPaginationButton>
      )}
      </ProjectPagination>
    </Container>
  )
}

export const query = graphql `
  query ProjectQuery($slug: String!, $prev: String!, $next: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    project: markdownRemark(
      fields: { slug: { eq: $slug }}
    ) {
      html
      frontmatter {
        title
        client
        role
        theme_color
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 720) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        cover {
          childImageSharp {
            sizes(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        feature_1 {
          childImageSharp {
            sizes(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        feature_2 {
          childImageSharp {
            sizes(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        feature_3 {
          childImageSharp {
            sizes(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        feature_4 {
          childImageSharp {
            sizes(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    prev: markdownRemark(fields: { slug: { eq: $prev } }) {
      fields {
        slug
      }
      frontmatter {
        title
        client
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 720) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    next: markdownRemark(fields: { slug: { eq: $next } }) {
      fields {
        slug
      }
      frontmatter {
        title
        client
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 720) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
