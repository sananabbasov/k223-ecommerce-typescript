import Header from '@/components/Header'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            Footer
        </>
    )
}

export default Layout


// <Layout>
//{children}
// </ Layout>