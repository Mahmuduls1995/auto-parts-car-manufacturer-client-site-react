import React from 'react';
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
        </div>
    );
};

export default Home;