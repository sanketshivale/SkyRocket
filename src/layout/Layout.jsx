import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    return (
        <main className='text-white flex flex-wrap bg-black '>
            <Header />
            <div className='w-full h-full'>
            <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default Layout;