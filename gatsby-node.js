const path = require('path')
const slash = require('slash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  console.log('testing...')
  try {
    const result = await graphql(`
      {
        allWpPage {
          nodes {
            id
            slug
          }
        }
        allWpPost(sort: { fields: [date] }) {
          nodes {
            id
            slug
          }
        }
      }
    `)
    // console.log(result.data.allWpPost.nodes[0])
    const { allWpPage, allWpPost } = result.data

    // posts
    const postTemplate = path.resolve(`./src/templates/post.js`)
    allWpPost.nodes.forEach(({
      id,
      slug,
    }) => {
      createPage({
        path: `/${slug}`,
        component: slash(postTemplate),
        context: { id },
      })
    })

    // pages
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    allWpPage.nodes.forEach(({
      id,
      slug,
    }) => {
      createPage({
        path: `/${slug}`,
        component: slash(pageTemplate),
        context: { id },
      })
    })
  } catch(err) {
    throw err
  }
}





