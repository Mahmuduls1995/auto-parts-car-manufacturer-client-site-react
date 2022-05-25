import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
            <div>
                <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                    My Information
                </h1>
                <h3 className='mb-2  tracking-wide text-xl text-gray-900 '>
                    Name:Sheikh Mahmudul Hasan
                </h3>
                <h3 className='mb-2  tracking-wide text-xl text-gray-900 '>
                    Email:mahmuduls451@gmail.com
                </h3>
                <h5 className='text-base text-left text-gray-800 md:text-xl'>
                   <li>
                        I am a 2nd Year Student  in BSc.hons of Computer Science of Engineering in Green University of Bangladesh.
                   </li>
                    
                </h5>
                <h5 className='text-base text-left text-gray-800 md:text-xl'>
                    I am a Professional Web Developer
                    <br />
                   <li>
                   I am Expert of: JavaScript, ES6, React JS, React Router, React Hook,HTML5, CSS3, Bootstrap-5
                   </li>
                    
                </h5>
                <h5 className='mb-5 text-base  text-left text-gray-800 md:text-xl'>
                   <h5 className='underline'> Recently My Three Project link below</h5>
                   <li>
                  <Link className='text-primary' to='#'>https://laptop-wearhouse.web.app/</Link>
                   </li>
                   <li>
                  <Link className='text-primary' to='#'>https://my-private-tutor.firebaseapp.com/</Link>
                   </li>
                   <li>
                  <Link className='text-primary' to='#'>https://hot-wheels-d4134.web.app/</Link>
                   </li>
                 
                 
                </h5>




                <Link
                    to='/'
                    className='w-full mb-2 py-2 px-3 text-white mt-3 bg-cyan-600 sm:w-auto sm:mb-0'
                >
                    Back to homepage
                </Link>
                <Link
                    to='/'
                    className='w-full mb-2 py-2 px-3 text-white mt-3 mx-2 bg-cyan-600 sm:w-auto sm:mb-0'
                >
                    Contact us
                </Link>
            </div>
            <div>
            <h2 className="my-2 text-center">My Project view</h2>
                <div className='w-full bg-gray-200 rounded-lg'>
                   
                    <img className="w-full"
                        style={{ height: '350px' }}
                        src='https://i.ibb.co/ggT8c1G/Screenshot-2022-05-25-at-23-56-48-Laptop-Store-House-1.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Portfolio;