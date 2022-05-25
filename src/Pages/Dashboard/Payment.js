import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../UserLogin/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0jmhEHnJ7uUs108cAHfveprx0MHDIJWVHbmgNWZqlUBYd1HmGnWo4HTSY1HRxOYhbvOp4kYz5wjbDqXBPwGUh200lC7ktAjQ');
const Payment = () => {
    const [user] =useAuthState(auth);
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    console.log(order);
    const quantity=parseInt(order?.orderQuantity)
    const price = parseInt(order?.productPrice)

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {order?.name}</p>
                <h2 class="card-title">Please Pay for {order?.productName} $</h2>
                <p>Your Product Will Be shipped your address,  {order?.address}</p>
                <p>Please pay: ${quantity*price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;