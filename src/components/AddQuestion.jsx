'use client'
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import CardQuestion from './CardQuestion';
import {
    addQuestionsByQuizId,
    getAllQuestion,
    addAnswerQuestion,
    editQuestion,
    editAnswer
} from '@/api/fetch';

const AddQuestion = ({ quizId }) => {
    const [questionText, setQuestionText] = useState('');
    const [answerText, setAnswerText] = useState('');
    const [showAddAnswer, setShowAddAnswer] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [byQuizId, setByQuizId] = useState();
    const [showEditForm, setShowEditForm] = useState(false);
    const [editQuestionText, setEditQuestionText] = useState('');
    const [editAnswerText, setEditAnswerText] = useState('');
    const [tempQuestionId, setTempQuestionId] = useState(0);
    const [tempAnswerId, setTempAnswerId] = useState(0)
    const [isShowEditAnswer, setIsShowEditAnswer] = useState(false)

    const showAddAnswerById = (quizzId) => {
        setShowAddAnswer(true);
        setByQuizId(quizzId);
    };

    const handleChangeQuestion = (event) => {
        setQuestionText(event.target.value);
    };

    const handleChangeAnswerQuestion = (event) => {
        setAnswerText(event.target.value);
    };

    const fetchGetAllQuestion = async () => {
        try {
            const response = await getAllQuestion(quizId);
            setQuestions(response.data.Questions);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchGetAllQuestion();
    }, []);

    // question
    const handleSubmitQuestion = async (e) => {
        e.preventDefault();
        try {
            const response = await addQuestionsByQuizId(quizId, questionText);
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
                setQuestionText('');
                fetchGetAllQuestion();
            }
        } catch (error) {
            toast.error(`${error.message}`, {
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

    const handleEditQuestion = async (e) => {
        e.preventDefault();
        try {
            const response = await editQuestion(tempQuestionId, editQuestionText);
            if (response) {
                toast.success("Edit Question success", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setEditQuestionText('');
                fetchGetAllQuestion();
            }
        } catch (error) {
            console.log(error);
            toast.error(`${error.message}`, {
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
    // 

    // Answer
    const handleSubmitAnswer = async (e) => {
        e.preventDefault();
        try {
            await addAnswerQuestion(byQuizId, answerText);
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
            setAnswerText('');
            fetchGetAllQuestion();
        } catch (error) {
            toast.warn(`${error.message}`, {
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

    const handleEditAnswer = async (e) => {
        e.preventDefault()
        try {
            const response = await editAnswer(tempAnswerId, editAnswerText)
            if (response) {
                toast.success("Edit Answer success", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setEditAnswerText('')
                setIsShowEditAnswer(false);
                fetchGetAllQuestion()
            }
        } catch (error) {
            console.log(error)
            toast.error(`${error.message}`, {
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
    }

    // 

    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <div className="grid grid-cols-3 gap-x-2">
                {questions.map((question) => (
                    <CardQuestion
                        key={question.id}
                        questionText={question.questions_text}
                        answers={question.Answers}
                        addAnswer={() => showAddAnswerById(question.id)}
                        editAnswer={(answerId, answerText) => { // Pass answerId and answerText to editAnswer
                            setTempAnswerId(answerId);
                            setEditAnswerText(answerText); // Set editAnswerText with the current answer text
                            setIsShowEditAnswer(true);
                        }}
                        editQuestion={() => {
                            setShowEditForm(true);
                            setEditQuestionText(question.questions_text);
                            setTempQuestionId(question.id);
                        }}
                        deleteQuestion={() => setShowModalDelete(true)}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center">
                {/* edit form answer */}
                {isShowEditAnswer && (
                    <form onSubmit={handleEditAnswer} className="space-y-4 w-[400px] m-5">
                        <label htmlFor="question" className="block text-lg font-semibold text-gray-800">
                            Form Edit Answer:
                        </label>
                        <input
                            id="question"
                            name="question"
                            type="text"
                            value={editAnswerText}
                            onChange={(e) => setEditAnswerText(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 font-semibold text-white bg-green-400 rounded-md hover:bg-green-500 focus:outline-none"
                        >
                            Edit Answer
                        </button>
                        <button
                            onClick={() => setIsShowEditAnswer(false)}
                            className="px-4 py-2 ml-2 font-semibold text-white bg-red-400 rounded-md hover:bg-red-500 focus:outline-none"
                        >
                            Cancel
                        </button>
                    </form>
                )}
                {/*  */}
                {showEditForm ? (
                    <form onSubmit={handleEditQuestion} className="space-y-4 w-[400px]">
                        <label htmlFor="question" className="block text-lg font-semibold text-gray-800">
                            Edit Question:
                        </label>
                        <input
                            id="question"
                            name="question"
                            type="text"
                            value={editQuestionText}
                            onChange={(event) => setEditQuestionText(event.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 font-semibold text-white bg-yellow-300 rounded-md hover:bg-yellow-400 focus:outline-none"
                        >
                            Edit Question
                        </button>
                        <button
                            onClick={() => {
                                setShowEditForm(false);
                                setEditQuestionText('');
                            }}
                            className="ml-2 px-4 py-2 font-semibold text-white bg-red-300 rounded-md hover:bg-red-400 focus:outline-none"
                        >
                            Cancel
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleSubmitQuestion} className="space-y-4 w-[400px]">
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
                )}

                {showAddAnswer && (
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
                            className="px-4 py-2 font-semibold text-white bg-green-400 rounded-md hover:bg-green-500 focus:outline-none"
                        >
                            Add Answer
                        </button>
                        <button
                            onClick={() => setShowAddAnswer(false)}
                            className="px-4 py-2 ml-2 font-semibold text-white bg-red-400 rounded-md hover:bg-red-500 focus:outline-none"
                        >
                            Cancel
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AddQuestion;
