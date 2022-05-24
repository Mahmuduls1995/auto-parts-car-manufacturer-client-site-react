import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../UserLogin/Loading';

const Makeadmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
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
            <h2>All User:{users.length}</h2>
        </div>
    );
};

export default Makeadmin;