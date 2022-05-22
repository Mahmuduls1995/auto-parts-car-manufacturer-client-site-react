import React from 'react';
import bannerImg from '../../assets/images/image (1).png'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse ">
            <img  data-aos="fade-left" src={bannerImg} class="max-w-sm rounded-lg shadow-2xl" alt="Dentist" />
            <div>
                <h1 class="text-5xl font-bold font-serif ">We will provide world wide best product</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Order Now</button>
            </div>
        </div>
    </div>
       
    );
};

export default Banner;