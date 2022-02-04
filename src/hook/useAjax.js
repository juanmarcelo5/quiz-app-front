import { useEffect, useState } from "react"

export const useAjax = ( url ) => {
    const [state, setState] = useState({data: null, loading: true, error: false })
    useEffect(() => {
        fetch(url)
            .then( res => res.json())
            .then( data => {
                setState({
                    loading:false,
                    data:data,
                    error:false
                })
            })
            .catch(
                setState({
                loading:true,
                data:null,
                error:true
            }))
       
    }, [url])

    return state
}