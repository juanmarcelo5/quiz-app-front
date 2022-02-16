import React from 'react'

export const ShowScore = ({ score, totalScore }) => {
	return (
		<div className='shadow p-3 mb-5 bg-body rounded border text-center p-3 animate__animated animate__fadeInLeft'>
			<h3 className='text-center'>Haz finalizado</h3>
			<h4>
				Obtuviste un puntaje de {score}/{totalScore}
			</h4>
			<a
				href='https://juanmarcelo5.github.io/quiz-app-front/'
				className='btn mt-2 p-2 btn-primary shadow '
			>
				Ver tu posicion en la lista de jugadores
			</a>
		</div>
	)
}
