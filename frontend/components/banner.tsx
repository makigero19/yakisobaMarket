
import { useState } from "react"
import styles from '../styles/Home.module.css'


export default function () {
    const [indexImage, setIndexImage] = useState<number>(0)
    const images = [
        {
            text: 'wellcome the website!',
            src: 'https://s.hdnux.com/photos/01/25/56/67/22474185/4/1200x0.jpg'
        }
        ,
        {
            text: "The best dishes from Tokyo are here!",
            src: 'https://norecipes.com/wp-content/uploads/2013/08/yakisoba-010.jpg'
        },
        
        {
            text: "anywhere anytime...",
            src: 'https://res.cloudinary.com/the-infatuation/image/upload/v1656118940/cms/RamenTatsuya.ChashuRiceBowl.MackenzieSmithKelley.Austin_202.jpg'
    
        },

        ]
    const image = images[indexImage]
    setTimeout(() => {
        if (images[indexImage + 1]) {
            setIndexImage(indexImage + 1)

        }else{
            setIndexImage(0)
        }
    }, 5000)

    return <div style={{
        backgroundImage: `url(${image.src || null})`
    }} className={styles.banner}>
        <h2>{image.text || null}</h2>
    </div>
}