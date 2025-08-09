import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';


const MainLayout = () => {
    const location = useLocation();
    const hideFooter = location.pathname === '/login' || location.pathname === '/signup';
    return (
        <div className='bg-[#141A1F] relative'>
            <header>
                <Navbar></Navbar>
            </header>
            <div className='h-16'></div>
            <main>
                <Outlet></Outlet>
            </main>
            {!hideFooter && (
                <footer>
                    <Footer></Footer>
                </footer>
            )}
        </div>
    );
};

export default MainLayout;