import { useEffect, useState } from "react"
import GetGifs from "../helpers/GetGifs";

const useFetchGifs = (category) => {
    const [state, setState] = useState({data:[], loading:true});

    useEffect(() => {
        GetGifs(category)
            .then( imgs => setState({data:imgs, loading:false}) );
    }, [category])

    return state;
}

export default useFetchGifs
