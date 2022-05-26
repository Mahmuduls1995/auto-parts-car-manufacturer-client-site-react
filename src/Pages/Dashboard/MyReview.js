import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = (data, event) => {
        event.preventDefault();


        const url = 'http://localhost:5000/review';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                toast('Your upLoad is successfully')
                event.target.reset();
            });

    }

    
    return (
        <div className=" ">
            <h2 className="text-2xl ">Add Review </h2>

            <div className="ml-3 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control bg-base-300 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control bg-base-300 w-full max-w-xs">
                        <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea placeholder="Comment" name="comment" className="px-2 text-center border mb-2" {...register("comment")} />
                    </div>

                    


                    <div className="form-control bg-base-300 w-full max-w-xs ">
                        <label>Rate Our product</label>
                        <select
                            className="our-form-input"
                            defaultValue="5"
                            {...register("rating", { required: true })}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>


                    <div className="form-control bg-base-300 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>

                        <input placeholder="Photo Url" name="img" className=" px-2 text-center py-2 border "  type="text" {...register("img")} />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;