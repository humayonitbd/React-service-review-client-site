import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedPage/Footer/Footer';
import Header from '../../SharedPage/Header/Header';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
            
        </div>
    );
};

export default Main;