import React from 'react';
import heroImg from './img/hero.png'

const Home = () => {
    return (
        <div className='flex justify-between flex-wrap mt-32'>
          <div className='md:w-1/3 md:ml-16 m-5'>
            <h1 className='text-3xl text-blue-500 mb-5'>Welcome to Quiz Hub</h1>
            <p className='text-left'>Quiz Hub is one of the best choices if you want to make your assessments engaging. It allows you to create an entire range of quizzes, from standard multiple-choice tests and Likert scale surveys to drag-and-drop and hotspot quizzes.</p>
          </div>
          <div className='w-full md:mr-16 md:w-1/3 m-5'>
            <img src={heroImg} alt="heroImg" />
          </div>
        </div>
    );
};

export default Home;