import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { RegisterAvatar } from '../components/RegisterAvatar'

import { ShowQuestion } from './ShowQuestion'

export const Quiz = () => {
	return (
		<div className='container'>
			<h1 className='text-title text-center mt-5'>Quiz App</h1>
			<Router>
				<Routes>
					<Route path='/' element={<RegisterAvatar />} />
					<Route path='/questions' element={<ShowQuestion />} />
				</Routes>
			</Router>
		</div>
	)
}
