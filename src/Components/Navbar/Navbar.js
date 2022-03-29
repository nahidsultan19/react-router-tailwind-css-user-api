import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-indigo-200 px-6 py-6 font-semibold flex items-center justify-center'>
                <Link to="/" className='mr-6'>Home</Link>
                <Link to="/users" className='mr-6'>Users</Link>
                <Link to="/contact" className='mr-6'>Contact</Link>
                <Link to="/services" className='mr-6'>Services</Link>
            </nav>
        </div>
    );
};

export default Navbar;