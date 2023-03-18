import { Layout, Banner } from "@/components"
import Product from "@/components/product"

import styles from '../styles/Home.module.css'

export default function Home() {
  const products = [
    {
      name: 'yakisoba',
      image: 'https://i0.statig.com.br/bancodeimagens/ca/65/2g/ca652g5orrm2zecj97g150cqj.jpg',
      price: 40,
      id: 'adsa',
      resume: `Yakisoba seasoning is a delicious delicacy of Japanese cuisine that has been gaining popularity around the world. The dish is a mixture of noodles, vegetables, and protein, usually meat or chicken, all sautéed in a deliciously seasoned sauce.`
    },
    {
      name: 'yakisoba',
      image: 'https://i0.statig.com.br/bancodeimagens/ca/65/2g/ca652g5orrm2zecj97g150cqj.jpg',
      price: 40,
      id: 'adsa'
      , resume: `Yakisoba seasoning is a delicious delicacy of Japanese cuisine that has been gaining popularity around the world. The dish is a mixture of noodles, vegetables, and protein, usually meat or chicken, all sautéed in a deliciously seasoned sauce.`
    },
    {
      name: 'yakisoba',
      image: 'https://i0.statig.com.br/bancodeimagens/ca/65/2g/ca652g5orrm2zecj97g150cqj.jpg',
      price: 40,
      id: 'adsa',
      resume: `Yakisoba seasoning is a delicious delicacy of Japanese cuisine that has been gaining popularity around the world. The dish is a mixture of noodles, vegetables, and protein, usually meat or chicken, all sautéed in a deliciously seasoned sauce.`
    }, {
      name: 'yakisoba',
      image: 'https://i0.statig.com.br/bancodeimagens/ca/65/2g/ca652g5orrm2zecj97g150cqj.jpg',
      price: 40,
      id: 'adsa',
      resume: `Yakisoba seasoning is a delicious delicacy of Japanese cuisine that has been gaining popularity around the world. The dish is a mixture of noodles, vegetables, and protein, usually meat or chicken, all sautéed in a deliciously seasoned sauce.`
    }
  ]
  return (
    <>
      <Layout title="home">
        <>
          <Banner />
          <div className={styles.content}>
            {products.map((product) => <Product product={product} />)}
          </div>
        </>

      </Layout>
    </>
  )
}
