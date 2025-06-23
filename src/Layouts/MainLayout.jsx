import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';


const MainLayout = () => {
    
    return (
        <div className='bg-[#141A1F]'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='max-w-4/5 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;