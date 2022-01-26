import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { RegisterAvatar } from '../components/RegisterAvatar'


import { ShowQuestion } from './ShowQuestion'

export const Quiz = () => {
  const [isAuth, setIsAuth] = useState(false);
	return (
		<div className='container'>
			<h1 className='text-title text-center mt-5'>Quiz App</h1>
			<Router>
				<Routes>
					<Route path='/' element={<RegisterAvatar isAuth= {setIsAuth} />} />
				<Route path='/questions' element={<ShowQuestion isAuth={isAuth}/>} />

				</Routes>
			</Router>
		</div>
	)
}
