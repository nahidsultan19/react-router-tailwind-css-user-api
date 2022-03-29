import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div className='w-80 bg-green-200 m-auto mt-16 p-6 border-0 rounded-md text-semibold'>
            <h2>This is details of user: {userId}</h2>
            <h3>Name: {user.name}</h3>
            <h4>Email: {user.email}</h4>
            <p>Website: {user.website}</p>
            <p><small>City: {user.address?.city}</small></p>
        </div>
    );
};

export default UserDetail;