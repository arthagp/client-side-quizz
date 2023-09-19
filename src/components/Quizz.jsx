const Quizz = ({
    question,
    submitAnswer,
    userResponse,
    handleResponseChange,
    onComplete,
    lists,
    currentQuestionIndex,
  }) => {
    const isLastQuestion = currentQuestionIndex === lists.length - 1;
  
    return (
      <div className="flex flex-col justify-center items-center gap-y-20">
        <div>
          <ul className="flex justify-center items-center mx-auto text-center gap-x-12">
            {lists.map((list, index) => (
              <li
                key={index}
                className={`flex border-8 ${
                  currentQuestionIndex === index
                    ? "border-yellow-300"
                    : "border-gray-300"
                } justify-center items-center w-8 h-8 text-black bg-gray-200 rounded-full p-3`}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[70%] flex justify-center items-center mx-auto bg-yellow-400">
          <p className="font-semibold text-white text-3xl p-6">{question}</p>
        </div>
        <div className="w-[50%] flex justify-center items-center mx-auto">
          <input
            className="text-gray-500 pl-3 border-4 border-yellow-200 w-[50%] h-[50px]"
            value={userResponse}
            onChange={handleResponseChange}
            type="text"
          />
        </div>
        <div className="w-[70%] flex justify-center items-center">
          {isLastQuestion ? (
            <button
              onClick={onComplete}
              className="border p-3 bg-green-300 text-white font-semibold flex justify-center items-center"
            >
              Complete
            </button>
          ) : (
            <button
              onClick={submitAnswer}
              className="border p-3 bg-yellow-300 text-white font-semibold flex justify-center items-center"
            >
              Answer And Next{" "}
              <span className="ml-2">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/FFFFFF/circled-chevron-right.png"
                  alt="circled-chevron-right"
                />
              </span>
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default Quizz;
  