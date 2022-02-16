import React, { useState } from 'react'
import { DataProvider } from '../context/DataContext'
import { RegisterAvatar } from './RegisterAvatar'
import { ShowAvatar } from './ShowAvatar'
import { ShowQuestion } from './ShowQuestion'

export const Quiz = () => {
	const [isRegister, setIsRegister] = useState(false)
	return (
		<div className='container p-3'>
			<DataProvider>
				<h1 className='text-title text-center mt-5 animate__animated animate__fadeIn'>Quiz App</h1>
				<div className='row'>
					{isRegister ? (
						<ShowQuestion />
					) : (
						<>
							<h3 className='text-title text-center mt-2 py-3 animate__animated animate__fadeIn '>
								Preguntas sobre la biblia
							</h3>
							<RegisterAvatar isAuth={setIsRegister} />
							<ShowAvatar />
						</>
					)}
				</div>
			</DataProvider>
		</div>
	)
}
