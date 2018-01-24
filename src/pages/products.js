import React from 'react'
import Link from 'gatsby-link'
import styles from './products.module.css'

export default ({data}) => (
    <div>
        <h1>Products</h1>
        
        <ul className={styles.itemsList}>
            {data.allSnipcartProduct.edges.map((o, index) =>
                <li key={index} className={styles.item}>
                    <Link to={o.node.path}>
                        <figure>
                            <img className={styles.image} src={o.node.image} alt={o.node.name}></img>
                            <figcaption className={styles.figCaption}>Buy the {o.node.name} now</figcaption>
                        </figure>
                    </Link>
                </li>
            )}
        </ul>
    </div>
)

export const query = graphql`
query snipcartProducts {
    allSnipcartProduct {
        edges {
            node {
                path,
                userDefinedId,
                name,
                image,
                price,
                description
            }
        }
    }
}
`