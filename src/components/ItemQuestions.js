import React from 'react'

export const ItemQuestions = ({el,getAnswer}) => {
	return (
		<div className='animate__animated animate__fadeIn'>
			 <button
				className='btn btn-primary mt-2 w-100'
				onClick={(e) => getAnswer(el.isCorrect,e)}
				key={el.answerText}
			>
				{el.answerText}
			</button> 
		</div>
	)
}
