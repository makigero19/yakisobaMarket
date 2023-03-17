import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Menu from "./menu";
import Search from "./search";

export default function ({ title }: { title: string }) {
    return <>
        <Head>
            <meta name="description" content="a market website of yakisoba" />
            <title>{title}</title>
            <meta name="keywords" content="yakisoba, ramen" />
            <meta name="author" content="Meu Nome" />
            <link rel="icon" href="/caminho/do/icon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet"/>

        </Head>
        <header className={styles.header}>
            <div>
                <Link href="/"><h1>yakisoba market</h1></Link>
            </div>
            <Search/>
            <Menu/>
        </header>
    </>
}