import React from 'react'
import Progress from './progressbar/Progress';

const Result = ({userAnswers,questions,restartQuiz =()=>{}}) => {
    const correctAnswer =userAnswers.filter((answer)=>answer.isCorrect).length
    const resultPercent = ((correctAnswer/questions.length)*100).toFixed(2);
    const inCorrectAnswer = (userAnswers.filter((answer)=>answer.isCorrect===false)).length
    const unAttemptedQuestion = userAnswers.filter((answer)=>answer.isCorrect===undefined).length
    const inCorrectAnswerPercent = ((inCorrectAnswer/(questions.length-unAttemptedQuestion))*100).toFixed(2);
    let results =[]
    results.push(resultPercent)
    results.push(inCorrectAnswerPercent)

  return (
    <>
    <div className=''>
      <div className=''>
      <h2 className=' text-2xl font-semibold'>You answered correctly {correctAnswer} out of {questions.length} questions.</h2>
      <span onClick={restartQuiz} className=' text-green-600 text-xl hover:underline cursor-pointer' >Click here to restart the Quiz</span>
      </div>
      <div>
        {/* <div className='w-full bg-gray-300 rounded-xl overflow-hidden'>
          <div className='  h-4 bg-green-600 flex justify-center items-center' style={{width:`${resultPercent}%`}}><p className=' text-xs'>{resultPercent}%</p></div>
        </div> */}
        {/* {
          results.map((res,index)=>(
            <Progress key={index} resultPercent={res} />
          ))
        } */}
        {correctAnswer>0 &&<Progress resultPercent={resultPercent} bgColor={" bg-green-600"}/>}
        {inCorrectAnswer>0 && <Progress resultPercent={inCorrectAnswerPercent} bgColor={" bg-red-600"}/>}
        {unAttemptedQuestion>0 &&<Progress resultPercent={((unAttemptedQuestion/questions.length)*100).toFixed(2)} bgColor={" bg-yellow-600"}/>}
        <h2 >Result: <span className={`${resultPercent>60?" text-green-500":resultPercent<=60 && resultPercent>40?" text-orange-300":" text-red-600"}`}>{resultPercent}%</span></h2>
        <h2 >Unsolved Questions: {unAttemptedQuestion}</h2>
      </div>

    </div>
    {
        questions.map((question,index)=>{
            return <div className=' w-[60%] max-sm:w-[100%] border  border-gray-300 rounded-md pt-5 pl-1' key={index}>
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
