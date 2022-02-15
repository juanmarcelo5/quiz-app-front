import React from 'react'
import { useAjax } from '../hook/useAjax'
import { Questions } from './Questions'

const url = 'https://quiz-appmb.herokuapp.com/api/question'
export const ShowQuestion = () => {
	const { data: question, loading } = useAjax(url)

	return (
		<div className='container'>
			{loading ? (
				<h5 className='text-center text-title - mt-3 '>
					Cargando preguntas... por favor espere!
				</h5>
			) : (
				<Questions questions={question.data} />
			)}
		</div>
	)
}
