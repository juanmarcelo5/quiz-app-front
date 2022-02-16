import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data }) => {
	return (
		<div className=' container text-center'>
			<h3>Puntajes obtenidos</h3>
			<table className='w-100 animate__animated animate__fadeIn'>
				<thead>
					<tr>
						<th> Posicion </th>
						<th> Nombre </th>
						<th> Puntos</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map((el,posicion) => <CrudTableRow key={el._id} el={el} posicion = {posicion} />)
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
