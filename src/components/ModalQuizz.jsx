'use client'
import React, { useEffect, useState } from 'react';
import { getAllQuiz } from '@/api/fetch';
import Card from './Card';

const ModalQuizz = ({handleCloseBtn}) => {
  const [quizzes, setQuizzes] = useState([]);
  
  const fetchAllQuiz = async () => {
    try {
      const response = await getAllQuiz();
      setQuizzes(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchAllQuiz();
  }, []);

  return (
    <div className='fixed left-0 top-0 flex justify-center items-center backdrop-blur-sm backdrop-opacity-90 w-screen h-screen '>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90vh] border-t-2 border-yellow-400 rounded-sm'>
        <div className='bg-white rounded-lg shadow-lg h-full'>
          <div className='px-6 py-4'>
            <h1 className='text-2xl font-semibold mb-4 opacity-70'>Available Quizzes</h1>
            {quizzes.map((quizz, index) => (
              <Card key={index} title={quizz.title} description={quizz.description} />
            ))}
          </div>
          <div className='bg-yellow-100 px-6 py-4 flex justify-end bottom-0 fixed w-full'>
            <button onClick={handleCloseBtn} className='bg-black hover:bg-yellow-400 text-white font-semibold py-2 px-4'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalQuizz;
