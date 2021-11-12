import { useEffect, useState } from 'react'
import Header from './header'

const Layout = (props: any) => {
    const {children } = props

    return (
        <div className='page'>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
