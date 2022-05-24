import React from 'react';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        {/* <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td> */}
        <td>{role !== 'admin' && <button class="btn btn-xs hover:text-white">Make Admin</button>}</td>
        <td><button class="btn btn-xs">Remove User</button></td>
    </tr>
    );
};

export default UserRow;