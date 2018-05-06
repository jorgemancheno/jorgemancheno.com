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
        projects: allMarkdownRemark(
          sort: {fields: [frontmatter___id], order: DESC}
          filter: { frontmatter: { archive: { ne: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        archive: allMarkdownRemark(
          sort: {fields: [frontmatter___id], order: DESC}
          filter: { frontmatter: { archive: { ne: false } } }
        ) {
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
      const groups = result.data

      Object.keys(groups).forEach(( k ) => {
        const group = groups[k]
        const nodes = group.edges
        const count = nodes.length

        nodes.forEach(({ node }, index) => {
          const prev = (index === 0) ? nodes[count - 1] : nodes[index - 1]
          const next = (index === (count - 1)) ? nodes[0] : nodes[index + 1]

          createPage({
            path: node.fields.slug,
            component: projectTemplate,
            context: {
              slug: node.fields.slug,
              prev: prev.node.fields.slug,
              next: next.node.fields.slug,
            }
          })
        })
      })
      resolve()
    })
  })
}
