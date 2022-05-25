import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const [user] = useAuthState(auth);
    const imageStorageKey = '438bbb9878273fc293f3ec8f80ed367c';


    const onSubmit = async (data, event) => {
        event.preventDefault();
        const image = data.img[0];


        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const parts = {
                        name: data.name,
                        img: img,
                        description: data.description,
                        price: data.price,
                        minimum_order_quantity: data.minimum_order_quantity,
                        available_quantity: data.available_quantity,
                    }

                    axios.post('http://localhost:5000/single_parts', parts)
                        .then(response => {
                            const data = response;
                            if (data.insertedId) {
                                toast.success('Your Upload is successfully')
                                reset();
                            }
                            console.log(response);
                        })



                }
            })


      







    }
    return (
        <div className='container bg-purple-300 '>
            <h2 className='text-center my-5 font-bold underline p-3'>Upload Product</h2>

            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" name="name" className="input-bordered input text-center py-2 px-2" {...register("name")} />

                <textarea placeholder="Description" name="description" className="px-2 my-3 text-center  input-bordered input mb-2" {...register("description")} />

                <div>
                    <label className="label h-0 ">
                        <span className="label-text">Photo</span>
                    </label>
                </div>

                <input
                    placeholder="Photo"
                    type="file"
                    className="input text-center input-bordered my-3 w-full "
                    {...register("img", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        }
                    })}
                />

                <input placeholder="Price" name="number" className=" px-2 input-bordered input text-center py-2 mb-2" type="number" {...register("price")} />

                <input placeholder="minimum_order_quantity" name="minimum_order_quantity" className=" px-2 text-center input-bordered input py-2 mb-2" type="number" {...register("minimum_order_quantity")} />


                <input placeholder="available_quantity" name="available_quantity" className=" px-2 text-center input-bordered input py-2 mb-2" type="number" {...register("available_quantity")} />


                <input className="transition duration-500 transform px-6 py-2 m-4 inline
           bg-teal-400 hover:bg-indigo-400
           border-2 border-green-500 hover:border-yellow-500
           hover:text-white
           w-50 mx-auto
           hover:shadow-md
           hover:scale-125" type="submit" value="Upload Product " />
            </form>

        </div>
    );
};

export default AddProduct;