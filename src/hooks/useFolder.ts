import { useState } from 'react';
import { useMutation } from 'react-query';
import { IFolder } from '~/models/IFolder';
import { getAllFolder, getCreateFolder } from '~/repositories/folder';
import useModal from './useModal';

function UseFolder() {
    const {
        isOpen: isOpenModalAddFolder,
        open: handleOpenModalAddFolder,
        close: handleCloseModalAddFolder,
    } = useModal();

    const [allFolder, setAllFolder] = useState<IFolder[]>([]);

    const { mutate: mutateGetFolder } = useMutation(
        'getAllFolder',
        ({ classId }: { classId: number }) => getAllFolder(classId),
        {
            onSuccess(data) {
                setAllFolder(data.data);
                console.log('data all ', data);
            },
        },
    );
    const { mutate: mutateCreateFolder } = useMutation(
        'createFolder',
        ({ classId, name }: { classId: number; name: string }) => getCreateFolder(classId, name),
        {
            onSuccess(data) {
                const cloneALlFolder = structuredClone(allFolder);
                const newData = data.data;
                console.log('new', newData);
                setAllFolder((prev) => [...prev, newData]);
                handleCloseModalAddFolder();
            },
        },
    );

    return {
        mutateGetFolder,
        isOpenModalAddFolder,
        handleOpenModalAddFolder,
        handleCloseModalAddFolder,
        mutateCreateFolder,
        allFolder,
    };
}

export default UseFolder;
