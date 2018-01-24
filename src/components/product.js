import React from 'react'
import Link from 'gatsby-link'
import styles from './product.module.css'
const NETLIFY_URL = 'https://snipcart-gatsby-grav.netlify.com'
export default ({data, location}) => (
    <div>
        <h1>{data.snipcartProduct.name}</h1>
        <div className={styles.breadcrumb}>
            <Link to='/products'>Back to the products</Link>
        </div>

        <section>
            <figure className={styles.productFigure}>
                <img src={data.snipcartProduct.image} />
            </figure>

            <article>
                {data.snipcartProduct.description}
            </article>
            <div className={styles.actions}>
                <button type="button" className={`${styles.buyButton} snipcart-add-item`}
                    data-item-name={data.snipcartProduct.name}
                    data-item-id={data.snipcartProduct.userDefinedId}
                    data-item-image={data.snipcartProduct.image}
                    data-item-url={`${NETLIFY_URL}${location.pathname}`}
                    data-item-price={data.snipcartProduct.price}>
                    Buy it now for {data.snipcartProduct.price}$
                </button>
            </div>
        </section>
    </div>
)

export const query = graphql`
query ProductById($id: String!) {
    snipcartProduct(userDefinedId: {eq:$id}) {
        userDefinedId,
        description,
        image,
        name,
        price
    }
}
`