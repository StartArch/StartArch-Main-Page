import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components/core';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>StartArch</title>
                <meta
                    name="description"
                    content="StartArch is a digital agency focused on making modern, beautiful, and efficient websites."/>
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://startarch.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="StartArch"/>
                <meta property="og:description" content="StartArch is a digital agency focused on making modern, beautiful, and efficient websites."/>
                <meta property="og:image" content="https://startarch.com/startarch-og-logo.png"/>

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="startarch.com"/>
                <meta property="twitter:url" content="https://startarch.com"/>
                <meta name="twitter:title" content="StartArch"/>
                <meta name="twitter:description" content="StartArch is a digital agency focused on making modern, beautiful, and efficient websites."/>
                <meta name="twitter:image" content="https://startarch.com/startarch-og-logo.png"/>
            </Head>

            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}
