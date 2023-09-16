'use client'
import React, {useState} from 'react'

const Quizz = ({ question, onNext, onPrevious, onComplete, lists, currentQuestionIndex }) => {
    const isLastQuestion = currentQuestionIndex === lists.length - 1;

    const [userResponse, setUserResponse] = useState('');

    const handleResponseChange = (event) => {
        setUserResponse(event.target.value);
    };

    return (
        <div className='flex flex-col justify-center items-center gap-y-20'>
            <div>
                <ul className='flex justify-center items-center mx-auto text-center gap-x-12'>
                    {lists.map((list, index) => (
                        <li key={index} className={`flex border-8 ${currentQuestionIndex === index ? 'border-yellow-300' : 'border-gray-300'
                            } justify-center items-center w-8 h-8 text-black bg-gray-200 rounded-full p-3`}>{list.id}</li>
                    ))}
                </ul>
            </div>
            <div className='max-w-[70%] flex justify-center items-center mx-auto bg-yellow-400'>
                <p className='font-semibold text-white text-3xl p-6'>{question}</p>
            </div>
            <div className='w-[50%] flex justify-center items-center mx-auto'>
                <input className='text-gray-500 pl-3 border-4 border-yellow-200 w-[50%] h-[50px]' 
                value={userResponse}
                onChange={handleResponseChange} 
                type="text" />
            </div>
            <div className='w-[70%] flex justify-between items-center'>
                <button
                    onClick={onPrevious}
                    className='border p-3 bg-gray-300 font-semibold text-black flex justify-center items-center'
                    disabled={currentQuestionIndex === 0} // Disable button question jika berada pada index ke 0
                >
                    <span><img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/sort-left.png" alt="sort-left" /></span> Previous
                </button>
                {isLastQuestion ? (
                    <button onClick={onComplete} className='border p-3 bg-green-300 text-white font-semibold flex justify-center items-center'>Complete</button>
                ) : (
                    <button onClick={onNext} className='border p-3 bg-yellow-300 text-white font-semibold flex justify-center items-center'>Next <span className='ml-2'><img width="24" height="24" src="https://img.icons8.com/material/24/FFFFFF/circled-chevron-right.png" alt="circled-chevron-right" /></span></button>
                )}
            </div>
        </div>
    )
}

export default Quizz
