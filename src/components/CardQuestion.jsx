import React from 'react'

const CardQuestion = ({ addAnswer, questionText, answers }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-3 w-[420px] border-t-2 border-yellow-200">
            <p className="text-gray-600 mb-4 max-w-[380px]">{questionText}</p>
            {answers.map((answer, index) => (
                <p key={index} className="text-gray-600">
                    Answer: {answer.answer_text}
                </p>
            ))}
            <div className="flex justify-start items-center space-x-2">
                <button onClick={addAnswer} className='border hover:bg-green-400 shadow-green-400 border-green-400 bg-green-300 text-white px-4 py-2 rounded-md shadow-lg'>Add Answer</button>
            </div>
        </div>
    )
}

export default CardQuestion