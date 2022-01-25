import React, { useState } from 'react';

export const Questions = ( {questions = []}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const getAnswer = ( answer )=>{
    //verificamos primero la rapues
    if( answer ){
      setScore(score+1)
      
    }else{
    }
    nextQuestion()
  }
      
      
  
  const nextQuestion = ()=>{
    const nextQuestion =  currentQuestion +1
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setTimeout(()=>{
        window.location.href = window.location.href;
      },1000)
    }

  }
  
  
  return (
  <>
    <h2>Preguntas sobre la biblia</h2>
    <h3>{questions[currentQuestion].title}</h3>
    {
      questions[currentQuestion].answer.map( el=>{
        return (
          <button className='btn btn-primary mt-2'
          onClick={()=>getAnswer(el.isCorrect)}
          key={el.answerText}
          >
          
            {el.answerText}
          </button>
        )
      })
      
    }

  </>
  );
};
