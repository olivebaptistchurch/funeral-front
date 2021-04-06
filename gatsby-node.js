/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpFuneralVideo: { nodes: allFunerals },
    },
  } = await graphql(`
    query {
      allWpFuneralVideo {
        nodes {
          id
          slug
          title
          funeralData {
            customMessage
            funeralVideoUrl
            thumbnailUrl
          }
        }
      }
    }
  `)

  const funeralTemplate = path.resolve(`./src/templates/funerals.js`)

  allFunerals.forEach(funeral => {
    createPage({
      // will be the url for the page
      path: `${funeral.id}/${funeral.slug}`,
      // specify the component template of your choice
      component: slash(funeralTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: funeral.id,
        title: funeral.title,
        customMessage: funeral.funeralData.customMessage,
        funeralUrl: funeral.funeralData.funeralVideoUrl,
        thumbnailUrl: funeral.funeralData.thumbnailUrl,
      },
    })
  })
}