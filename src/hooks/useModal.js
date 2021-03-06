import { useCallback, useState } from 'react';

export default function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [nameDelete, setNameDelete] = useState('');

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        isOpen,
        open,
        close,
    };
}
