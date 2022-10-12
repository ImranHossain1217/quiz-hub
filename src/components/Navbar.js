import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='flex justify-between p-6'>
            <div>
                <h1 className='text-blue-500 text-2xl'>Quiz Hub</h1>
            </div>
            <div>
               <Link className='mr-2 md:mr-5 hover:text-blue-500' to="/home">Home</Link>
               <Link className='mr-2 md:mr-5 hover:text-blue-500' to="/topics">Topics</Link>
               <Link className='mr-2 md:mr-5 hover:text-blue-500' to="/statics">Statics</Link>
               <Link className='mr-2 md:mr-5 hover:text-blue-500' to="/blog">Blog</Link>
            </div>
            
        </div>
    );
};

export default Navbar;