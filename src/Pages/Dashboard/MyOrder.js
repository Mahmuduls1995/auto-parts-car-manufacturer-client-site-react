import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {


    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])



    return (
       
            <div>
                <h2>MY order:{orders.length}</h2>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((a, index) => <tr key={a._id}>
                                    <th>{index + 1}</th>
                                    <td>{a.productName}</td>
                                    <td>{a.productDescription.slice(0,60)}</td>
                                    <td>{a.orderQuantity}</td>
                                    <td>{a.productPrice}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}

                                        {(a.price && a.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                        </div>}
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

   
    );
};

export default MyOrder;