import React from 'react';
import { useParams } from 'react-router-dom';

const OrderPd = () => {
    const { id } = useParams();
    return (
        <div>
            <h2 className="mt-20">My Order: {id}</h2>

        </div>
    );
};

export default OrderPd;