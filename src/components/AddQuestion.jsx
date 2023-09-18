'use client'
import React, { useEffect, useState } from 'react';
import { addQuestionsByQuizId, getAllQuestion, addAnswerQuestion } from '@/api/fetch'
import { toast } from 'react-toastify'
import CardQuestion from './CardQuestion';

const AddQuestion = ({ quizId }) => {
    const [questionText, setQuestionText] = useState('')
    const [answerText, setAnswerText] = useState('')
    const [showAddAnswer, setShowAddAnswer] = useState(false)
    const [questions, setQuestions] = useState([])
    const [byQuizId, setByQuizId] = useState()
    // menambahkan list question yanga ada pada quizId, dan terdapat button add answer di bawah question_text nya

    const showAddAnswerById = (quizzId) => {
        setShowAddAnswer(true)
        setByQuizId(quizzId)
    }


    const handleChangeQuestion = (event) => {
        setQuestionText(event.target.value)
    }
    const handleChangeAnswerQuestion = (event) => {
        setAnswerText(event.target.value)
    }

    const fetchGetAllQuestion = async () => {
        try {
            const response = await getAllQuestion(quizId)
            setQuestions(response.data.Questions)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGetAllQuestion()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Tambahkan logika untuk menambahkan pertanyaan ke database di sini
        try {
            const response = await addQuestionsByQuizId(quizId, questionText)
            if (response) {
                toast.success("Add questions success", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setQuestionText('')
                fetchGetAllQuestion()
            }
        } catch (error) {
            toast.success(`${error.message}`, {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    const handleSubmitAnswer = async (e) => {
        e.preventDefault();
        try {
            await addAnswerQuestion(byQuizId, answerText)
            toast.success("Add Answer success", {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setAnswerText('')
            fetchGetAllQuestion()
        } catch (error) {
            toast.success(`${error.message}`, {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <div className='grid grid-cols-3 gap-x-2'>
                {questions.map(question => (
                    <CardQuestion key={question.id} questionText={question.questions_text} answers={question.Answers} addAnswer={() => { showAddAnswerById(question.id) }} />
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} className="space-y-4 w-[400px]">
                    <label htmlFor="question" className="block text-lg font-semibold text-gray-800">
                        Add Question:
                    </label>
                    <input
                        id="question"
                        name="question"
                        type="text"
                        value={questionText}
                        onChange={handleChangeQuestion}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 font-semibold text-white bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-blue-600"
                    >
                        Add Question
                    </button>
                </form>
                {
                    showAddAnswer && (
                        <form onSubmit={handleSubmitAnswer} className="space-y-4 w-[400px] m-5">
                            <label htmlFor="question" className="block text-lg font-semibold text-gray-800">
                                Add Answer:
                            </label>
                            <input
                                id="question"
                                name="question"
                                type="text"
                                value={answerText}
                                onChange={handleChangeAnswerQuestion}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 font-semibold text-white bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-blue-600"
                            >
                                Add Question
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    );
};

export default AddQuestion;
