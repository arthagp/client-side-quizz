import React from 'react'

const CardQuestion = ({ addAnswer, questionText, answers, editQuestion, editAnswer }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-3 w-[420px] border-t-2 border-yellow-200">
            <p className="text-gray-600 mb-4 max-w-[380px]">{questionText}</p>
            {answers.map((answer, index) => (
                <div key={index} className='flex justify-start items-center gap-x-2 my-3'>
                    <p className="text-gray-600">
                        Answer: {answer.answer_text}
                    </p>
                    <button onClick={() => editAnswer(answer.id, answer.answer_text)} className='text-sm border border-gray-300 bg-green-300 rounded-md hover:bg-green-400 text-white px-2 py-1'>Edit answer</button>
                </div>
            ))}
            <div className="flex text-sm justify-start items-center space-x-2">
                <button onClick={addAnswer} className='border hover:bg-green-400 shadow-green-400 border-green-400 bg-green-300 text-white px-3 py-1 rounded-md shadow-lg'>Add Answer</button>
                <button onClick={editQuestion} className='border hover:bg-yellow-400 shadow-yellow-400 border-yellow-400 bg-yellow-300 text-white px-3 py-1 rounded-md shadow-lg'>Edit Question</button>
            </div>
        </div>
    )
}

export default CardQuestion