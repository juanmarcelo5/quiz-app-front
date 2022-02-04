import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'

const url = 'https://quiz-appmb.herokuapp.com/api/auth'

export const RegisterAvatar = ({ isAuth }) => {
	const [avatar, setData] = useState('')
	const { setData: updateData } = useContext(DataContext)

	const addAvatar = async () => {
		if (avatar.length === 0) {
			alert('El avatar no puede estar vacio!!')
		}

		const dataPost = {
			avatar,
		}

		let options = {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(dataPost),
		}
		try {
			const res = await fetch(url, options),
				json = await res.json()
			if (!res.ok) {
				console.log(json)
				throw new Error(json.msg)
			}
			updateData(dataPost)
			isAuth(true)
		} catch (error) {
			console.log(error)
			return alert(error)
		}
	}

	return (
		<div className='col-lg-6 col-md-12  text-center'>
			<h3 className='text-center'> Registrate y juega! </h3>
			<input
				className='form-control'
				type='text'
				onChange={(e) => setData(e.target.value)}
			/>
			<button className='btn btn-primary text-center mt-3' onClick={addAvatar}>
				Registrar
			</button>
		</div>
	)
}
