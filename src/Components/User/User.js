import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const { name, email, id } = props.user;

    const navigate = useNavigate();

    const userDetail = () => {
        const path = `/user/${id}`;
        navigate(path)
    }
    return (
        <div className='w-80 bg-green-200 text-center border-0 rounded-md py-10'>
            <h1 className='text-xl'>{name}</h1>
            <p><small>{email}</small></p>
            <button onClick={userDetail} className='w-36 bg-indigo-400 mt-10 border-0 rounded-md p-2 text-white font-semibold'>Details</button>
        </div>
    );
};

export default User;