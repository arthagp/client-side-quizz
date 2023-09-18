import React from 'react';

const CardMyQuizz = ({ title, description, deleteQuizz, editQuizz, addQuestions }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-3 w-[420px] border-t-2 border-yellow-200">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-start items-center space-x-2">
        <button onClick={deleteQuizz} className='border hover:bg-red-400 shadow-red-400 border-red-400 bg-red-300 text-white px-4 py-2 rounded-md shadow-lg'>Delete</button>
        <button onClick={editQuizz} className='border hover:bg-yellow-400 shadow-yellow-400 border-yellow-400 bg-yellow-300 text-white px-4 py-2 rounded-md shadow-lg'>Edit</button>
        <button onClick={addQuestions} className='border hover:bg-green-400 shadow-green-400 border-green-400 bg-green-300 text-white px-4 py-2 rounded-md shadow-lg'>Add Questions</button>
      </div>
    </div>
  );
};

export default CardMyQuizz;
