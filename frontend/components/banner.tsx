
import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'


export default function () {
    const [indexImage, setIndexImage] = useState<number>(0)
    const [loaded, setLoaded] = useState<boolean>(true)
    const images = [
        {
            text: 'wellcome the website!',
            src: 'https://s.hdnux.com/photos/01/25/56/67/22474185/4/1200x0.jpg'
        }
        ,

        {
            text: "anywhere anytime...",
            src: 'https://res.cloudinary.com/the-infatuation/image/upload/v1656118940/cms/RamenTatsuya.ChashuRiceBowl.MackenzieSmithKelley.Austin_202.jpg'

        },

    ]
    const handleImageLoad = () => {
        setLoaded(true)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (images[indexImage + 1]) {
                setIndexImage(indexImage + 1)

            } else {
                setIndexImage(0)
            }

        }, 5000)

        return () => clearInterval(interval);
    }, [indexImage])
    const image = images[indexImage]

    return <div style={{
        backgroundImage: `url(${image.src || null})`,
        display: loaded ? 'block' : 'none'
    }} className={styles.banner}>
        <h2>{image.text || null}</h2>
        <img src={image.src} alt="image" style={{ display: 'none' }} onLoad={handleImageLoad} />
    </div>
}