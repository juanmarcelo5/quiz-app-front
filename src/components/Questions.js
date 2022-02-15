import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { ItemQuestions } from './ItemQuestions'
import { ShowScore } from './ShowScore'
const URL = 'https://quiz-appmb.herokuapp.com/api/auth'

export const Questions = ({ questions = [] }) => {
	let [score, setScore] = useState(0)
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [isFinished, setIsFinished] = useState(false)
	const { data, setData } = useContext(DataContext)

	useEffect(() => {
		if (!isFinished) {
			return
		}
		const options = {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		}
		fetch(URL, options)
			.then((res) => res.json())
			.then((data) => {
				setData({
					loading: false,
					data: data,
					error: null,
				})
			})
	}, [isFinished])

	const getAnswer = (answer, e) => {
		//verificamos primero la respuesta y cambiamos los colores
		if (answer) {
			setScore(() => (score += 5))
			e.target.classList = 'btn btn-success mt-2 w-100'
		} else {
			e.target.classList = 'btn btn-danger mt-2 w-100'
		}
		setTimeout(() => {
			nextQuestion()
		}, 300)
	}

	const nextQuestion = () => {
		const nextQuestion = currentQuestion + 1
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setData({ ...data, score })
			setIsFinished(true)
		}
	}
	return (
		<>
			{!isFinished ? (
				<div className='row'>
					<div className='col-lg-4 col-md-12 col-sm-12'></div>
					<div className='col-lg-4 col-md-12 col-sm-0'>
						<h5>
							#Pregunta {currentQuestion + 1}/{questions.length}
						</h5>
						<h5>{questions[currentQuestion].title}</h5>
						{questions[currentQuestion].answer.map((el) => {
							return (
								<ItemQuestions
									key={el.answerText}
									el={el}
									getAnswer={getAnswer}
								/>
							)
						})}
					</div>
					<div className='col-lg-4 col-md-12 col-sm-0'></div>
				</div>
			) : (
				<ShowScore score={score} totalScore={questions.length * 5} />
			)}
		</>
	)
}
