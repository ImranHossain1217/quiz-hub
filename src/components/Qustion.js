import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Option from './Option';

const Qustion = () => {
    const qustions = useLoaderData();
    const quizQustions = qustions.data.questions;
    console.log(quizQustions);
    return (
        <div>
            <h1>qustion components: {quizQustions.length}</h1>
               <div className=''>
                {
                    quizQustions.map(qustion => {
                        return <div className='border w-8/12 m-5 p-3 mx-auto'>
                        <h3>Qustion: {qustion.question}</h3>
                           <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-2/3 mx-auto'>
                            <Option></Option>
                           </div>
                        </div>
                    })
                }
               </div>
        </div>
    );
};

export default Qustion;