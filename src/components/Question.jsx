import React, { useState } from "react";
import Button from "./button/Button";

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
                  style={{userSelect:"none"}}
                >
                  {String.fromCharCode(65+index).toUpperCase()+". "}
                  {option.text}
                </li>
              );
            })}
          </ul>
          <div className=" flex justify-between items-center p-3 lg:w-[50%] max-sm:w-full max-md:w-full m-auto">
            <Button onClick={onPreviousClick} className={"bg-gray-500 text-white hover:bg-gray-600"}>Previous</Button>
            <Button onClick={()=>onNextQuestionClick(currentQuestion)} className={"bg-orange-600 text-white hover:bg-orange-700"}>Next</Button>
            <Button onClick={()=>onAnswerClick(item?.isCorrect, item?.index)} className={"bg-green-600  text-white hover:bg-green-700"} >Save & Next</Button>
          </div>
        </>
      ) : (
         <div className=" flex justify-evenly">
          <Button onClick={onPreviousClick} className={"bg-gray-500 text-white font-semibold hover:bg-gray-600"}>⬅ Back</Button>
          <Button onClick={()=>setIsSubmitted(true)} className={"bg-blue-700 text-white font-semibold hover:bg-blue-800"}>Submit your Response ➡️</Button>
        </div>
      )}
    </div>
  );
};

export default Question;
