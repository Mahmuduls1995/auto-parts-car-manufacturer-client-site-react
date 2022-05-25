import React, { useEffect, useState } from 'react';

const ManageProduct = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/single_parts')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    


    const handleUserDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {

            console.log('deleting  user id', id);
            const url = `http://localhost:5000/single_parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)

                    }
                });
        

        }
    }


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="lg:w-full sm:w-full text-sm text-left text-gray-300 dark:text-gray-300">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Parts name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                       Min. Quantity
                    </th>
                    
                    <th scope="col" className="px-6 py-3">
                        Ava.Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>

                {
                    products.map((product) => {
                        return (<tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {product.name}
                            </th>
                            <td className="px-6 py-4 ">
                                <img className="w-20" src={product.img} alt="" />
                            </td>

                            <td className="px-6 py-4">
                                {product.price}
                            </td>
                            <td className="px-6 py-4">
                                {product.minimum_order_quantity}
                            </td>
                           
                            <td className="px-6 py-4">
                                {product.available_quantity}
                            </td>
                            <td className="px-6 py-4">
                                {product.description.slice(0, 30)}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => handleUserDelete(product._id)} className="btn btn-primary">Delete</button>
                            </td>
                        </tr>)
                    })
                }

            </tbody>
        </table>
    </div>
    );
};

export default ManageProduct;