const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, getNodes, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('./src/templates/project.js')

    graphql(`
      {
        allMarkdownRemark(sort: {fields: [frontmatter___id], order: DESC}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
      `
    ).then(result => {
      const projects = result.data.allMarkdownRemark.edges
      const count = projects.length

      projects.forEach(({ node }, index) => {
        const prev = (index === 0) ? projects[count - 1] : projects[index - 1]
        const next = (index === (count - 1)) ? projects[0] : projects[index + 1]

        createPage({
          path: node.fields.slug,
          component: projectTemplate,
          context: {
            slug: node.fields.slug,
            prev: prev.node.fields.slug,
            next: next.node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
