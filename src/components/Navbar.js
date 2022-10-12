import React from 'react';


const Navbar = () => {
    return (
        <div className='flex justify-between p-6'>
            <div>
                <h1 className='text-blue-500 text-2xl'>Quiz Hub</h1>
            </div>
            <div>
               <a className='mr-2 md:mr-5 hover:text-blue-500' href="/home">Home</a>
               <a className='mr-2 md:mr-5 hover:text-blue-500' href="/topics">Topics</a>
               <a className='mr-2 md:mr-5 hover:text-blue-500' href="/statics">Statics</a>
               <a className='mr-2 md:mr-5 hover:text-blue-500' href="/blog">Blog</a>
            </div>
            
        </div>
    );
};

export default Navbar;