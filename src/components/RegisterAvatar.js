import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { ShowAvatar } from './ShowAvatar'
const url = 'https://quiz-appmb.herokuapp.com/api/auth'

export const RegisterAvatar = () => {
	const [avatar, setAvatar] = useState('')
	const [isRegister, setIsRegister] = useState(false)

	const addAvatar = async () => {
		if (avatar.length === 0) {
			return alert('El avatar no puede estar vacio!!')
		}
		const data = {
			avatar,
		}
		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(data),
			})
			setIsRegister(true)
			
		} catch (error) {
			console.log(error)
			return alert('Ocurrio un error inesperado!')
		}
	}

	return (
		<div className='col-lg-6 col-md-12  text-center'>
      {isRegister && <Navigate to='/questions'/>}
			<h3 className='text-center'> Registrate y juega! </h3>
			<input
				className='form-control'
				type='text'
				value={avatar}
				onChange={(e) => setAvatar(e.target.value)}
			/>
			<button className='btn btn-primary text-center mt-3' onClick={addAvatar}>
				Registrar
			</button>
			<hr />
			<ShowAvatar />
		</div>
	)
}
