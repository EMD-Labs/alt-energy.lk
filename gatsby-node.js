const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query AllProjects {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
      ) {
        nodes {
          frontmatter {
            relativep
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/projectTemp.js"),
      context: { relativepath: node.frontmatter.relativep },
    })
  })
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const queryResults = await graphql(`
//     query AllProjects {
//       allMarkdownRemark(
//         filter: { frontmatter: { category: { eq: "project" } } }
//       ) {
//         nodes {
//           frontmatter {
//             email
//             name
//             phone
//             slug
//             title
//             featuredImage {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//           html
//         }
//       }
//     }
//   `)
//   const productTemplate = path.resolve(`src/templates/projectTemp.js`)
//   queryResults.data.allMarkdownRemark.nodes.forEach(node => {
//     createPage({
//       path: `/projects/${node.frontmatter.slug}`,
//       component: productTemplate,
//       context: {
//         project: node,
//       },
//     })
//   })
// }

// // module.exports.createPagesProd = async ({ graphql, actions }) => {
// //   const { createPage } = actions
// //   const queryResults = await graphql(`
// //     query AllProducts {
// //       allMarkdownRemark(
// //         filter: { frontmatter: { category: { eq: "product" } } }
// //       ) {
// //         nodes {
// //           frontmatter {
// //             category
// //             email
// //             name
// //             phone
// //             slug
// //             title
// //           }
// //           html
// //         }
// //       }
// //     }
// //   `)
// //   const productTemplate = path.resolve(`src/templates/productTemp.js`)
// //   queryResults.data.allMarkdownRemark.nodes.forEach(node => {
// //     createPage({
// //       path: `/products/${node.frontmatter.slug}`,
// //       component: productTemplate,
// //       context: {
// //         product: node,
// //       },
// //     })
// //   })
// // }
