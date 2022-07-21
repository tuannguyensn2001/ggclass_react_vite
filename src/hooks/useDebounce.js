import {useState,useEffect} from 'react';

function useDebounce(value,delay){
    const {debounceValue,setDeBounceValue} = useState(value)

    useEffect(()=>{
        const handler = setTimeout(()=> setDeBounceValue(value),delay)
    },[value])

    return debounceValue;
}

export default useDebounce;