import Layout from '@/layout/Layout'
import { AppProps } from 'next/app'
import React from 'react'

function app({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component  {...pageProps} />
        </Layout>
    )
}

export default app