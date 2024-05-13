import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    return (
        <main className='text-white bg-black'>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
};

export default Layout;