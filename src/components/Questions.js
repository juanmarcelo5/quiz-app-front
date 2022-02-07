import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
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
		fetch(URL, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				setData({
					loading: false,
					data: data,
					error: null,
				})
			})

		window.location.replace('/quiz-app-front')
	}, [isFinished])

	const getAnswer = (answer, e) => {
		//verificamos primero la rapuesta y cambiamos los colores
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
		<div className='row'>
			<div className='col-lg-4 col-md-12'></div>

			<div className='col-lg-4 col-md-12'>
				<h3> Preguntas sobre la biblia</h3>
				<h5>{questions[currentQuestion].title}</h5>
				{questions[currentQuestion].answer.map((el) => {
					return (
						<button
							className='btn btn-primary mt-2 w-100'
							onClick={(e) => getAnswer(el.isCorrect, e)}
							key={el.answerText}
						>
							{el.answerText}
						</button>
					)
				})}
			</div>
			<div className='col-lg-4 col-md-12'></div>
		</div>
	)
}
