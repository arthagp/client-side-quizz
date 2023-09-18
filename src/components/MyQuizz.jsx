'use client'
import React, { useEffect, useState } from 'react';
import CardMyQuizz from './CardMyQuizz';
import { getAllQuizByUserId, createQuizz } from '@/api/fetch';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'

const MyQuizz = () => {
  const router = useRouter()
  const [quizes, setQuizes] = useState([]);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const fetchAllMyQuiz = async () => {
    try {
      const response = await getAllQuizByUserId();
      if (response) {
        setQuizes(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleCreateQuizz = async () => {
    try {
      await createQuizz(title, description)
      toast.success("create quizz successful", {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTitle('')
      setDescription('')
      fetchAllMyQuiz()
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddQuestion = (quizId) => {
    router.push(`my-quizz/${quizId}/add-question`)
  }

  useEffect(() => {
    fetchAllMyQuiz();
  }, []);

  return (
    <>
      <div className='flex justify-center items-center'>
        <form className='flex flex-col space-y-4 w-96' onSubmit={handleCreateQuizz}>
          <label htmlFor="title" className="text-lg font-semibold">Title</label>
          <input
            value={title}
            onChange={handleChangeTitle}
            id='title'
            type="text"
            className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="description" className="text-lg font-semibold">Description</label>
          <input
            value={description}
            onChange={handleChangeDescription}
            id='description'
            type="text"
            className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

          <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create Quiz</button>
        </form>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {quizes.map((quizz, index) => (
          <CardMyQuizz
            key={index}
            title={quizz.title}
            description={quizz.description}
            // editQuizz={ }
            // deleteQuizz={ }
            addQuestions={() => handleAddQuestion(quizz.id)}
          />
        ))}
      </div>
    </>
  );
};

export default MyQuizz;
