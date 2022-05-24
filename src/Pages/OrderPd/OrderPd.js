import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderPd = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    // const [reload, setIsReload] = useState(true)

    const [parts, setParts] = useState({});
    const [quantity, setQuantity] = useState({});
    // const [quantity, setNewQuantity] = useState({});

    // const newQuantity = quantity.minimum_order_quantity;
    const newQuantity = quantity;
    const available_quantity = parts.available_quantity;
    const minimum_quantity = parts.minimum_order_quantity;
    

    
    useEffect(() => {
        const url = `http://localhost:5000/single_parts/${id}`;

        fetch(url)
            .then((response) => response.json())
            .then(data => setParts(data))


    }, [])




    const handleOrder = event => {
        event.preventDefault();

        const newQuantity = event.target.quantity.value;
        // const newQuantity = quantity.minimum_order_quantity;
        const available_quantity = parts.available_quantity;
        const minimum_quantity = parts.minimum_order_quantity;
        console.log(newQuantity);

        if (newQuantity > available_quantity || newQuantity < minimum_quantity) {
            return toast.error('You can not order more than ' + available_quantity + ' And Must order' + minimum_quantity + ' above of minimum quantity ')

        }

        else {
            toast.success('Your order sucessfully completed')
            event.target.reset()
        }

    }


    const handleQuantityChange = event => {

        const newQuantity = event.target.value;
        setQuantity(newQuantity);


    }

    //  const handleQuantityChange=event => {
        
    //     const{minimum_order_quantity,...rest}=parts;
    //     const newQuantity =event.target.value;
    //     const newUser={minimum_order_quantity:newQuantity,...rest};
    //     console.log(newUser);

    //     setNewQuantity(newUser)
    //     setParts(newUser)
    // }



    return (
        <div className="bg-gray-300">

            <div>

                <div className='col-12 col-sm-12 col-lg-4 col-md-6 g-4  mx-auto '>

                    <div className="card px-3">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Product Name</strong>: {parts?.name}</h5>
                            <p className="card-text"><strong>Description</strong>:  {parts?.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Price</strong>: {parts?.price} $</li>


                            <li className="list-group-item"><strong>Available Quantity</strong>: {parts?.available_quantity}</li>

                            <li className="list-group-item"><strong>Minimum Quantity</strong>: {parts?.minimum_order_quantity}</li>


                        </ul>

                        <div>
                            <form onSubmit={handleOrder} >

                                <input type="number" className="border-2 w-full text-center py-2 border-green-700 my-3" placeholder={parts?.minimum_order_quantity} 
                                 onChange={handleQuantityChange}
                                name="quantity"
                                />


                                {/* <input type="number" className="border-2 w-full text-center py-2 border-green-700 my-3" value={parts?.minimum_order_quantity} name="quantity"
                                    onChange={handleQuantityChange}
                                    placeholder=" Add Quantity" /> */}


                                <br />


                                <input type="text" name="name" disabled value={user?.displayName || ''} className="input mt-2 text-center input-bordered w-full " />

                                <input type="email" name="email" disabled value={user?.email || ''} className="input text-center input-bordered w-full my-2 " />

                                <input type="number" name="phone" placeholder="Phone Number" class="input input-bordered w-full my-2 " />


                                <input type="text" name="address" placeholder="Address" class="input input-bordered w-full my-2 " />

                                <button 
                                disabled={newQuantity > available_quantity || newQuantity < minimum_quantity}
                                className="btn btn-primary w-100 mx-auto " >Please Order</button>

                                {/* <button 
                                disabled={newQuantity > available_quantity || newQuantity < minimum_quantity}
                                className="btn btn-primary w-100 mx-auto " >Please Order</button> */}

                            </form>

                        </div>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default OrderPd;