import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data }) => {
	return (
		<div className='text-center'>
			<h3>Puntajes obtenidos</h3>
			<table className='w-100'>
				<thead>
					<tr>
						<th>Nombre </th>
						<th> Puntos</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map((el) => <CrudTableRow key={el._id} el={el} />)
					) : (
						<tr>
							<td colSpan='3'>Sin datos</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default CrudTable
