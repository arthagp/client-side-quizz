import React from 'react';

const Card = ({ title, description, startQuizz }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button onClick={startQuizz} className='border-yellow-400 max-w-[150px] text-white font-semibold bg-yellow-400 border py-[10px] px-7 mt-6 shadow-yellow-300 shadow-xl'>Start Quiz</button>
    </div>
  );
};

export default Card;
