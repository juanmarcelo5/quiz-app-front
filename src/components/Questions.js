import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export const Questions = ({ questions = [] }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [score, setScore] = useState(0)
	const [finished, setFinished] = useState(false)

	const getAnswer = (answer,e) => {
		//verificamos primero la rapues
		if (answer) {
			setScore(score + 1)
    
				console.log('cambianndo');
        e.target.className='btn btn-success mt-2'				
				
			} else {
			e.target.className='btn btn-danger mt-2'				
		
		}
		setTimeout(()=>{

			nextQuestion()
		},2000)
	}

	const nextQuestion = () => {
		const nextQuestion = currentQuestion + 1
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setFinished(true)
		}
	}

	return (
		<>
			{finished && <Navigate to='/' />}
			<h2>Preguntas sobre la biblia</h2>
			<h3>{questions[currentQuestion].title}</h3>
			{questions[currentQuestion].answer.map((el) => {
				return (
					<button
						className='btn btn-primary mt-2'
						onClick={(e) => getAnswer(el.isCorrect,e)}
						key={el.answerText}
					>
						{el.answerText}
					</button>
				)
			})}
		</>
	)
}
