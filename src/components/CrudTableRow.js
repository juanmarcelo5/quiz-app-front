import React from 'react'

const CrudTableRow = ({ el,posicion  }) => {
	let { avatar, score } = el

	return (
		<tr className='w-100'>
			<td>{posicion+1}</td>
			<td>{avatar}</td>
			<td>{score}</td>
		</tr>
	)
}

export default CrudTableRow
