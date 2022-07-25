import { useCallback, useState } from 'react';

export default function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [nameDelete, setNameDelete] = useState('');
    const [userIdDelete, setUserIdDelete] = useState(-1);

    const open = useCallback((name, id) => {
        console.log('name', name, id);
        setUserIdDelete(id);
        setNameDelete(name);
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);
    return {
        isOpen,
        open,
        close,
        nameDelete,
        userIdDelete,
    };
}
