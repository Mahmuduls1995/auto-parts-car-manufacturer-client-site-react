import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../UserLogin/Loading';
import UserRow from './UserRow';

const Makeadmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mysterious-badlands-57067.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All Users:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead className="bg-base-300 ">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Makeadmin;