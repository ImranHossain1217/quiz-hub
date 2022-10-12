import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Qustion = () => {
    const qustions = useLoaderData();
    const quizQustions = qustions.data.questions;
    return (
        <div>
            <h1 className='mt-5 text-3xl'>Start Your Quiz</h1>
               <div className=''>
                {
                    quizQustions.map(qustion => {
                        return <div className='border w-8/12 m-5 p-3 mx-auto bg-blue-200 rounded'>
                        <h3 className='md:text-xl mb-2'>Qustion: {qustion.question}</h3>
                           <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-2/3 mx-auto'>
                              {
                                qustion.options.map(option => <p className='m-2 border p-2 bg-blue-900 text-white rounded-md'>{option}</p>)
                              }
                           </div>
                        </div>
                    })
                }
               </div>
        </div>
    );
};

export default Qustion;