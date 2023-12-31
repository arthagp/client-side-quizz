'use client'
import React, { useEffect, useState } from 'react';
import { getAllQuiz } from '@/api/fetch';
import Card from './Card';
import { useRouter } from 'next/navigation';
// terdapat kesalahan pada bagian getAlreadyScoreBoard ini melakukan error, karena score sudah tidak ada

const ModalQuizz = ({ handleCloseBtn }) => {
  const [quizzes, setQuizzes] = useState([]);
  const router = useRouter()

  const fetchAllQuiz = async () => {
    try {
      const response = await getAllQuiz();
      setQuizzes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOpenQuizz = (quizId) => {
    router.push(`/${quizId}`)
  }

  useEffect(() => {
    fetchAllQuiz();
  }, []);


  // jika button pada card di klik akan melempar sebuah id pada quizz, untuk di olah di dalam component quizz
  return (
    <div className='fixed left-0 top-0 flex justify-center items-center backdrop-blur-sm backdrop-opacity-90 w-screen h-screen '>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90vh] border-t-2 border-yellow-400 rounded-sm'>
        <div className='bg-white rounded-lg shadow-lg h-full'>
          <h1 className='text-2xl font-semibold mb-4 opacity-70 p-3'>Available Quizzes</h1>
          <div className='grid grid-cols-4 gap-x-3 m-3'>
            {quizzes.map((quizz, index) => {
              return (
                <Card
                  key={index}
                  title={quizz.title}
                  description={quizz.description}
                  startQuizz={() => { handleOpenQuizz(quizz.id); }}
                />
              );
            })}

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