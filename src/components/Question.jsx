import React, { useState } from "react";

const Question = ({
  question,
  onAnswerClick,
  currentQuestion,
  onPreviousClick,
  item,
  selectAnswerHandler,
  onNextQuestionClick,
  isSubmitted,
  activeTimeUp,
  setIsSubmitted,
}) => {
  // const [item,setItem] =useState({})
  // const selectAnswerHandler = (isCorrect,index)=>{
  //      setItem({isCorrect,index})
  //      console.log(item);
  // }
  return (
    <div className="">
      {question ? (
        <>
          <h2 className=" text-xl font-semibold">
            {currentQuestion + 1}.{question.question}
          </h2>
          <ul className="">
            {question.answerOptions?.map((option, index) => {
              return (
                <li
                  key={index}
                  className={` p-2  rounded-md duration-100 cursor-pointer ${
                    item?.index === index
                      ? "bg-green-500 hover:bg-green-600 duration-200"
                      : "hover:bg-gray-300"
                  }`}
                  //   onClick={() => onAnswerClick(option.isCorrect, index)}
                  onClick={() => selectAnswerHandler(option.isCorrect, index)}
                >
                  {}
                  {option.text}
                </li>
              );
            })}
          </ul>
          <div className=" flex justify-between items-center p-3 w-[50%] m-auto">
            <button
              onClick={onPreviousClick}
              className=" bg-gray-400 p-1 px-4 rounded-sm text-white hover:bg-gray-500 duration-200"
            >
              Previous
            </button>
            <button
              onClick={() => onNextQuestionClick(currentQuestion)}
              className=" bg-orange-600 p-1 px-6 rounded-sm text-white hover:bg-orange-700 duration-200"
            >
              Next
            </button>
            <button
              onClick={() => onAnswerClick(item?.isCorrect, item?.index)}
              className=" bg-green-600 p-1 px-4 text-white rounded-sm hover:bg-green-700 duration-200"
            >
              Save & Next
            </button>
          </div>
        </>
      ) : (
         <div className=" flex justify-center">
          <button
            onClick={onPreviousClick}
            className=" bg-blue-500 px-4 py-1 rounded-md text-white font-semibold hover:bg-blue-600 duration-200"
          >
            ⬅ Back
          </button>
          <button
            onClick={() => setIsSubmitted(true)}
            className=" bg-blue-500 px-4 py-1 rounded-md text-white font-semibold hover:bg-blue-600 duration-200"
          >
            Submit your Response ➡️
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
