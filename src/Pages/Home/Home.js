import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Faq from './Faq';
import Partners from './Partners';
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
            <Partners></Partners>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;