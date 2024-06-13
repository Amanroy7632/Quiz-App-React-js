import React from 'react'

const Result = ({userAnswers,questions,restartQuiz =()=>{}}) => {
    const correctAnswer =userAnswers.filter((answer)=>answer.isCorrect).length
    const resultPercent = ((correctAnswer/questions.length)*100).toFixed(2);
    const unSolvedQuestion = userAnswers.filter((answer)=>answer.isCorrect===undefined).length
  return (
    <>
    <div className=''>
      <div className=''>
      <h2 className=' text-2xl font-semibold'>You answered correctly {correctAnswer} out of {questions.length} questions.</h2>
      <span onClick={restartQuiz} className=' text-green-600 text-xl hover:underline cursor-pointer' >Click here to restart the Quiz</span>
      </div>
      <div>
        <h2 >Result: <span className={`${resultPercent>60?" text-green-500":resultPercent<=60 && resultPercent>40?" text-orange-300":" text-red-600"}`}>{resultPercent}%</span></h2>
        <h2 >Unsolved Questions: {unSolvedQuestion}</h2>
      </div>

    </div>
    {
        questions.map((question,index)=>{
            return <div className=' w-[60%] border  border-gray-300 rounded-md pt-5 pl-1' key={index}>
                      <h2> Q{index+1}. { question.question}</h2>
                      <ul className=''>
                        {
                            question?.answerOptions.map((option,i)=>{
                                return <li key={i} className={` p-1 pl-1 rounded-md ${(userAnswers[index].isCorrect && i===userAnswers[index].index)?"bg-green-500":userAnswers[index].index===i?" bg-red-400":option.isCorrect?"bg-green-500":"" } `}
                             >{option.text}</li>
                            })
                        }
                      </ul>
                   </div>
        })
    }
    </>
  )
}

export default Result
