
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    // console.log(user);



    const onSubmit = (data, event) => {
        event.preventDefault();


        const info = {
            email: user.email,
            name: user.displayName,
            education: event.target.education.value,
            phone: event.target.phone.value,
            linkdn: event.target.linkdn.value,


        }




        fetch('https://mysterious-badlands-57067.herokuapp.com/profile', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data inside', data);
                if (data.upsertedId) {
                    toast('Your upLoad is successfully')
                    reset();
                }

            })

    }


    return (
        <div class="max-w-md p-8 mt-3 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div class="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <img src={user?.photoURL} alt="" class="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>
            <div class="flex flex-col space-y-4">
                <div>
                    <h2 class="text-2xl font-semibold">{user?.displayName}</h2>
                    <span class="text-sm dark:text-gray-400">General manager</span>
                </div>
                <div class="space-y-1">
                    <span class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" class="w-4 h-4">
                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                        </svg>
                        <span class="dark:text-gray-400">{user?.email}</span>
                        <span class="dark:text-gray-400">{user?.phone}</span>
                    </span>



                    <span class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" class="w-4 h-4">
                            <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                        </svg>
                        <span class="dark:text-gray-400">+9987307465</span>
                    </span>


                    <div>
                        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)} >
                            <input placeholder="Education" name="education" className="border text-center py-2 px-2 text-black " {...register("education")} />

                            <input placeholder="Linkdn" name="linkdn" className="border text-center my-2 py-2 px-2 text-black" {...register("linkdn")} />

                            {/* <input placeholder="Photo Url" name="img" className=" px-2 text-center py-2 my-3 border " type="text" {...register("img")} /> */}


                            <input placeholder="Phone" name="phone" className="text-black px-2 border text-center py-2 mb-2" type="number" {...register("phone")} />


                            <input className="transition duration-500 bg-white transform text-black px-6 py-2   " type="submit" value="save Info " />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;



