import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAjax } from '../hook/useAjax'
import { Questions } from './Questions'

const url = 'https://quiz-appmb.herokuapp.com/api/question'
export const ShowQuestion = ({isAuth}) => {
	const { data: question, loading, error } = useAjax(url)
	return (
		<div className='row'>
			{!isAuth && <Navigate to='/'/> }	
			{loading ? (<h4>Cargando preguntas...La primera vez suele tardar</h4>				
			) : (
				<Questions questions={question.data} />
			)}
		</div>
	)
}
