import React from 'react'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
	let { avatar, score } = el

	return (
		<tr>
			<td>{avatar}</td>
			<td>{score}</td>
		</tr>
	)
}

export default CrudTableRow
