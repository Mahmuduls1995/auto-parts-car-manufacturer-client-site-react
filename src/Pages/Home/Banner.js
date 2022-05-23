import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/image (1).png'

const Banner = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none text-start sm:text-6xl">We will Provide
                    <span className="dark:text-violet-400"> world </span>
                      wide best product.
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start  ">
                        
                        <Link to ={'/'}  href="#" className="px-8 py-3 text-white text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:bg-gradient-to-r from-cyan-500 to-blue-50 ">Subscribe Now</Link>

                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={bannerImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>






    );
};

export default Banner;