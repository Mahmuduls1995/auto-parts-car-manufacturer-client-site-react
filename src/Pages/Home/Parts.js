import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('part.json')
            .then((response) => response.json())
            .then((data) => setParts(data));
    }, []);

    return (

        <div className="bg-gray-200">

            <h2 className="text-center my-3 text-green-700 p-4 ">OUR PRODUCTS</h2>

            <div className="">

                <div className="row">

                    {
                        parts.slice(0, 6).map(pd => (

                            <div className='col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6  g-4 mx-auto' key={pd._id}>
                                <div className="card flex">
                                    <div className="w-80  mx-auto h-fit transform cursor-pointer hover transition duration-500 hover:scale-125">
                                        <img src={pd.img} className="card-img-top img-fluid " alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Product Name</strong>:{pd.name}</h5>
                                        <p className="card-text"><strong>Description</strong>:{pd.description.slice(0, 80)}</p>
                                        <li className="list-group-item"><strong> Minimum Quantity</strong>: {pd.minimum_order_quantity}</li>
                                        <li className="list-group-item"><strong>Available Quantity</strong>: {pd.available_quantity}</li>
                                        <li className="list-group-item"><strong>Price</strong>: {pd.price}</li>

                                    </div>


                                    {/* <ul className="list-group list-group-flush">
                                      
                                        <li className="list-group-item"><strong> Minimum Quantity</strong>: {pd.minimum_order_quantity}</li>
                                        <li className="list-group-item"><strong>Available Quantity</strong>: {pd.available_quantity}</li>
                                        <li className="list-group-item"><strong>Price</strong>: {pd.price}</li>
                                       
                                    </ul> */}
                                    
                                    <div className=" my-2 text-center ">
                                        <Link to={'/'}><button className='btn  px-5 btn-primary '>Order Now</button> </Link>
                                    </div>
                                </div>


                            </div>)

                        )
                    }
                </div>

            </div>



        </div>



    );
};

export default Parts;