const slash = require('slash')
const path = require('path')

exports.createPages = async ({graphql, boundActionCreators}) => {
    let result = await graphql(`
        {
            allSnipcartProduct {
                edges {
                    node {
                        path,
                        userDefinedId,
                        name
                    }
                }
            }
        }
    `)

    const { createPage } = boundActionCreators
    const productTemplate = path.resolve('src/components/product.js')

    result.data.allSnipcartProduct
        .edges
        .map(x => x.node)
        .forEach(node => {
            createPage({
                path: node.path,
                component: slash(productTemplate),
                context: {
                    id: node.userDefinedId
                }
            })
        })
}