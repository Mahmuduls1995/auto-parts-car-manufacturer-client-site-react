import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/single_parts')
            .then((response) => response.json())
            .then((data) => setParts(data));
    }, []);

    return (

        <div className="bg-gray-200">

           <div className="text-center">
           <h2 className="text-center my-3 text-white font-bold text-2xl rounded-lg p-4 bg-gradient-to-r from-sky-500 to-indigo-500 d-inline-block ">OUR PRODUCTS</h2>
           </div>

            <div className="">

                <div className="row">

                    {
                        parts.slice(0, 6).map(pd => (

                            <div className='col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6  g-4 mx-auto' key={pd._id}>
                                <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 flex  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer">


                                    <div className="w-80  mx-auto h-fit transform cursor-pointer hover transition duration-500 hover:scale-125  ">
                                        <img src={pd?.img} className="card-img-top img-fluid  " alt="..." />
                                    </div>
                                    <div className="card-body ">
                                        <h5 className="card-title text-white"><strong>Product Name</strong>:{pd?.name}</h5>
                                        
                                        <p className="card-text text-white"><strong>Description</strong>:{pd.description.slice(0, 80)}</p>

                                        <li className="list-group-item bg-gradient-to-r from-cyan-500 to-blue-50"><strong> Minimum Quantity</strong>: {pd?.minimum_order_quantity}</li>

                                        <li className="list-group-item bg-gradient-to-r from-cyan-500 to-blue-50"><strong>Available Quantity</strong>: {pd?.available_quantity}</li>

                                        <li className="list-group-item bg-gradient-to-r from-cyan-500 to-blue-50"><strong>Price</strong>: {pd?.price}</li>

                                    </div>


                                    {/* <ul className="list-group list-group-flush">
                                      
                                        <li className="list-group-item"><strong> Minimum Quantity</strong>: {pd.minimum_order_quantity}</li>
                                        <li className="list-group-item"><strong>Available Quantity</strong>: {pd.available_quantity}</li>
                                        <li className="list-group-item"><strong>Price</strong>: {pd.price}</li>
                                       
                                    </ul> */}

                                    <div className=" my-2 text-center ">
                                        <Link to={`/orderPd/${pd?._id}`}><button className='btn  px-5 btn-primary '>Order Now</button> </Link>
                                    </div>
                                </div>

                            </div>))
                    }
                </div>

            </div>



        </div>



    );
};

export default Parts;