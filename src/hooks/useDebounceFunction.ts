import { useCallback, useEffect, useRef } from 'react';

export default function useDebounceFunction(callback: Function, timer: number) {
    const id = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (id?.current) {
                clearTimeout(id?.current);
            }
        };
    }, []);

    return useCallback((...params: any) => {
        if (id?.current) {
            clearTimeout(id?.current);
        }
        id.current = setTimeout(() => {
            callback(...params);
        }, timer);
    }, []);
}
