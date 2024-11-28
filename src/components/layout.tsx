import type { PropsWithChildren } from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-muted">
            <Header />
            <main className="container min-h-screen mx-auto px-4 md:px-8 py-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout