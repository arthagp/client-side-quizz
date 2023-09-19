'use client'
import React, { useEffect, useState } from 'react';
import CardMyQuizz from './CardMyQuizz';
import { getAllQuizByUserId, createQuizz, deleteQuizById, editQuizId } from '@/api/fetch';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'
import ModalDelete from './ModalDelete';

const MyQuizz = () => {
  const router = useRouter()
  const [quizes, setQuizes] = useState([]);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const [tempQuizId, setTempQuizId] = useState()
  const [showFormEdit, setShowFormEdit] = useState(false)


  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  // handle delete modal
  const showDeleteModal = (quizId) => {
    setIsDeleteModal(true)
    setTempQuizId(quizId)
  }
  const closeDeleteModal = () => {
    setIsDeleteModal(false)
  }
  // 

  const handleShowEdit = (quizId) => {
    const quizToEdit = quizes.find((quizz) => quizz.id === quizId); // mencari quizz berdasarkan parameter quizzId
    if (quizToEdit) {
      setEditTitle(quizToEdit.title);
      setEditDescription(quizToEdit.description);
    }
    setShowFormEdit(true);
    setTempQuizId(quizId);
  }


  const cancelEditForm = () => {
    setShowFormEdit(false)
  }
  //

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


  const handleCreateQuizz = async (e) => {
    e.preventDefault()

    // Menghapus spasi di awal dan akhir
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    // console.log(!trimmedTitle, '<><><>') // true

    if (!trimmedTitle || !trimmedDescription) { // mengubah menjadi boolean
      toast.error("Title and description are required.", {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const response = await createQuizz(trimmedTitle, trimmedDescription);
        if (response) {
          toast.success("Create quizz successful", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTitle('');
          setDescription('');
          fetchAllMyQuiz();
        }
      } catch (error) {
        console.log(error);
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const handleEditQuizz = async (e) => {
    e.preventDefault()
    try {
      const response = await editQuizId(tempQuizId, editTitle, editDescription)
      console.log(response)
      if (response) {
        toast.success("Edit quizz successful", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEditTitle('');
        setEditDescription('');
        fetchAllMyQuiz();
      }
    } catch (error) {
      console.log(error)
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleDeleteQuizz = async () => {
    try {
      const response = await deleteQuizById(tempQuizId)
      if (response) {
        toast.success("delete quizz successful", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchAllMyQuiz()
        setIsDeleteModal(false)
      }
    } catch (error) {
      console.log(error)
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
        {showFormEdit ? (
          <form className='flex flex-col space-y-4 w-96' onSubmit={handleEditQuizz}>
            <label htmlFor="title" className="text-lg font-semibold">Title</label>
            <input
              value={editTitle}
              onChange={(event) => setEditTitle(event.target.value)}
              id='title'
              type="text"
              className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="description" className="text-lg font-semibold">Description</label>
            <input
              value={editDescription}
              onChange={(event) => setEditDescription(event.target.value)}
              id='description'
              type="text"
              className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className='flex justify-center items-center gap-x-2'>
              <button type='submit' className="bg-green-300 text-white px-4 py-2 rounded-md hover:bg-green-400 focus:outline-none ">Edit Quiz</button>
              <button onClick={cancelEditForm} className="bg-yellow-300 text-white px-4 py-2 rounded-md hover:bg-yellow-400 focus:outline-none ">Cancel Edit</button>
            </div>
          </form>
        ) : (
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

            <button type='submit' className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none ">Create Quiz</button>
          </form>
        )}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {quizes.map((quizz, index) => (
          <CardMyQuizz
            key={index}
            title={quizz.title}
            description={quizz.description}
            editQuizz={() => handleShowEdit(quizz.id)}
            deleteQuizz={() => showDeleteModal(quizz.id)}
            addQuestions={() => handleAddQuestion(quizz.id)}
          />
        ))}
      </div>
      {isDeleteModal && (
        <ModalDelete handleCancel={closeDeleteModal} handleDelete={handleDeleteQuizz} />
      )}
    </>
  );
};

export default MyQuizz;
