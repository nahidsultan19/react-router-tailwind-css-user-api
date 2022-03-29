import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([])
    console.log(users)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className=''>
            <div className='grid md:grid-cols-3 gap-5 py-10 mx-10'>
                {users.map(user => <User key={user.id} user={user}></User>)}
            </div>
        </div>
    );
};

export default Users;