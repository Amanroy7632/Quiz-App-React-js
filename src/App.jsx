import {  useState } from "react";
import questions from "./constraints/question.json";
import Question from "./components/Question";
import Result from "./components/Result";
import Timer from "./components/Timer";
import Header from "./components/header/Header";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUerAnswers] = useState([]);
  const [item, setItem] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTimeUp,setActiveTimeUp] = useState(false);
  const handleNextQuestion = (isCorrect, index) => {
    const res = {
      isCorrect,
      index,
    };
    console.log(res);
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      // const checkAlreadyAnswed = userAnswers.filter(
      //   (item) => item.index === index
      // );
      // console.log(checkAlreadyAnswed);
      setUerAnswers([...userAnswers, res]);
      console.log(userAnswers);
    }
    setItem({});
  };
  const onPreviousClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setItem({});
      userAnswers.pop();
      setIsSubmitted(false);
    }
  };
  const onNextQuestionClick = (index) => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setUerAnswers([...userAnswers, { isCorrect: undefined, index:null }]);
      // console.log(userAnswers);
    }
  };
  const selectAnswerHandler = (isCorrect, index) => {
    setItem({ isCorrect, index });
    // console.log(item);
  };
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setUerAnswers([]);
    setIsSubmitted(!isSubmitted)
  };
  // const datetime = new Date().getHours();
  const targetDate = new Date();
  targetDate.setSeconds(targetDate.getSeconds() + 150);

  return (
    <>
    <Header/>
    <div className="container lg:w-full relative flex justify-center items-center flex-col p-6 md:p-2">
      <h1 className=" text-4xl font-semibold">Let's solve some Quizes</h1>
      <div className=" flex justify-end w-[60%]">
        {/* <span>Timer: {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds }</span> */}
        <Timer targetDate={targetDate} isSubmitted={isSubmitted} setActiveTimeUp={setActiveTimeUp}
         />
      </div>
      {!isSubmitted&&<div className=" w-[60%] max-sm:w-[99%] border p-3 rounded-md shadow-xl border-gray-300 mt-5">
        {/* question components */}
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
          onPreviousClick={onPreviousClick}
          item={item}
          selectAnswerHandler={selectAnswerHandler}
          onNextQuestionClick={onNextQuestionClick}
          currentQuestion={currentQuestion}
          isSubmitted={isSubmitted}
          activeTimeUp={activeTimeUp}
          setIsSubmitted={setIsSubmitted}
        />
      </div>}
      {/* results showing */}
      {  isSubmitted && currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          restartQuiz={handleRestartQuiz}
        />
      )}
      {
        activeTimeUp &&<div>
          <button onClick={()=>setIsSubmitted(true)}>Submit your Response</button>
        </div>
      }
    </div>
    </>
  );
}

export default App;
