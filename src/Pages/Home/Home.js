import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Stats></Stats>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;