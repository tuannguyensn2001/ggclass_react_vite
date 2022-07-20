import { useCallback, useEffect, useRef } from 'react';

export default function useDebounceFunction(callback, timer) {
    const id = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(id?.current);
        };
    }, []);

    return useCallback((...params) => {
        clearTimeout(id?.current);
        id.current = setTimeout(() => {
            callback(...params);
        }, timer);
    }, []);
}
