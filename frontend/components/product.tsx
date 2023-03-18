import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYen } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/Home.module.css'

type Product = {
    name: string,
    image: string,
    price: number,
    id: string,
    resume: string
}
export default function ({ product }: { product: Product }) {

    return <div className={styles.product} data-resume={product.resume}>
        <img src={product.image} alt="image" />
        <h3>{product.name}</h3>
        <span>{product.price} <FontAwesomeIcon icon={faYen} /></span>
    </div>
}