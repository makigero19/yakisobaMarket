import Head from "next/head";

export default function ({ title }: { title: string }) {
    return <>
        <Head>
            <meta name="description" content="a market website of yakisoba" />
            <title>{title}</title>
            <meta name="keywords" content="yakisoba, ramen" />
            <meta name="author" content="Meu Nome" />
            <link rel="icon" href="/caminho/do/icon.ico" />
        </Head>
        <header>
            <div>
                <h1>yakisoba market!</h1>
            </div>
            
        </header>
    </>
}