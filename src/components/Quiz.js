import React, { useState } from 'react'
import { DataProvider } from '../context/DataContext'
import { RegisterAvatar } from './RegisterAvatar'
import { ShowAvatar } from './ShowAvatar'
import { ShowQuestion } from './ShowQuestion'

export const Quiz = () => {
	const [isRegister, setIsRegister] = useState(false)
	return (
		<div className='container'>
			<DataProvider>
				<h1 className='text-title text-center mt-5'>Quiz App</h1>
				<div className='row'>
					{isRegister ? (
						<ShowQuestion />
					) : (
						<>
							<RegisterAvatar isAuth={setIsRegister} />
							<ShowAvatar />
						</>
					)}
				</div>
			</DataProvider>
		</div>
	)
}
