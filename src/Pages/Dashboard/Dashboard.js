import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile mt-20 bg-gray-100">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content p-5 ">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side ">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-full bg-purple-200 text-base-content ">
                    {/* <!-- Sidebar content here --> */}

                    {/* <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li> */}
                    
                    <li><Link to="/dashboard/profile">My Profile</Link></li>


                    {user && !admin && <>
                        <li><Link to="/dashboard/myOrder">My Order</Link></li>
                        <li><Link to="/dashboard/review">My Review</Link></li>

                    </>}



                    {admin && <>

                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>

                        <li><Link to="/dashboard/manageOrder">Manage All Order</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage Products</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;