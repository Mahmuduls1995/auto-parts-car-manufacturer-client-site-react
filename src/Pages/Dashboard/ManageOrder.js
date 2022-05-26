import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const ManageOrder = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])

    // const [parts, setParts] = useState([])

    useEffect(() => {
        const getOrders = async () => {

            const url = 'https://mysterious-badlands-57067.herokuapp.com/orders';

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                setOrders(data);
                console.log(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log(error.message);
                    
                    Navigate('/login')
                }
            }
        }
        getOrders();



       

    }, [])



    const makeAdmin = () => {
        toast.success("Product is Shipped sucessfully");

    }




    return (
        <div>
            <h2 className="my-2">All User order:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.productName}</td>
                                <td>{a.email}</td>
                                <td>{a.orderQuantity}</td>
                                <td>{a.productPrice}</td>
                                <td>
                                    {/* {(a.productPrice && !a.paid) &&

                                        <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>

                                    } */}

                                    {(!a.paid) &&

                                        <span className=' bg-emerald-200 px-2 rounded-md '>Unpaid</span>

                                    }




                                    {(a.productPrice && a.paid) && <div>
                                        <button onClick={makeAdmin} className='btn btn-xs btn-error'>Pending</button>

                                    </div>

                                    }


                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;