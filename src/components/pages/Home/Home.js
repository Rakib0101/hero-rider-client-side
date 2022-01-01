import React from 'react';
import AboutUs from '../../shared/AboutUs/AboutUs';
import AppBar from '../../shared/AppBar/AppBar';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <AppBar></AppBar>  
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </>
    );
};

export default Home;