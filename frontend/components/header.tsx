import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Menu from "./menu";
import Search from "./search";

import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'

export default function ({ title }: { title: string }) {
    return <>
        <Head>
            <meta name="description" content="a market website of yakisoba" />
            <title>{title}</title>
            <meta name="keywords" content="yakisoba, ramen" />
            <meta name="author" content="Meu Nome" />
            <link rel="icon" href="/caminho/do/icon.ico" />
          
        </Head>
        <header className={styles.header}>
            <div>
                <Link href="/" className={styles.floatbox}>
                    <Image src={logo} alt="logo" width={50} height={50}/>
                    <h1>yakisoba market</h1></Link>
            </div>
            <Search/>
            <Menu/>
        </header>
    </>
}