import { useEffect, useState } from "react"


export const useAjax = ( url ) => {
    const [state, setState] = useState({data: null, loading: true, error: null })
    useEffect(() => {
        fetch(url)
            .then( res => res.json())
            .then( data => {
                setState({
                    loading:false,
                    data:data,
                    error:null
                })
            })
       
    }, [url])

    return state
}
