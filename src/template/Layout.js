import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <Banner />
            {children}
            <Footer />
        </div>
    )
}
