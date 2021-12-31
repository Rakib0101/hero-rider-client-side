import React from 'react';
import AboutUs from '../../shared/AboutUs/AboutUs';
import AppBar from '../../shared/AppBar/AppBar';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import Packages from '../../shared/Packages/Packages';

const Home = () => {
    return (
        <>
            <AppBar></AppBar>  
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Packages></Packages>
            <Footer></Footer>
        </>
    );
};

export default Home;