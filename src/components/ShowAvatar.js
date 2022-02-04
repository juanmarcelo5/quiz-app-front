import React from 'react'
import { useAjax } from '../hook/useAjax'
import CrudTable from './CrudTable'
const URL = 'https://quiz-appmb.herokuapp.com/api/auth'
export const ShowAvatar = () => {
	const { data: avatars, loading, error} = useAjax(URL)
	return (
		<div className='col-lg-6 col-md-12  d-felx '>
			{loading ? 'Cargando...' : <CrudTable data={avatars.data} />}
		</div>
	)
}
