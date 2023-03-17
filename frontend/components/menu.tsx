import Link from "next/link"
import { useState } from "react"
import styles from '../styles/Home.module.css'


export default function () {
    const visible = useState<Boolean>(false)
    
    const opt: { title: string, link: string }[] = [{
        title: 'dishes',
        link: '/dishes'
    },
    {
        title: 'products',
        link: '/products'
    },

    {
        title: 'delivery',
        link: '/delivery'
    },
    {
        title: 'watch',
        link: '/watch'
    },

    {
        title: 'contact',
        link: '/contact'
    }
    ]
    return <div className={styles.menu}>
        <ul>
            {opt.map((item, i) => {
                return <li key={i}>
                    <Link href={item.link}>{item.title}</Link>
                </li>
            })}
        </ul>
    </div>

}