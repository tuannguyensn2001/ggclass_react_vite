import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { IFolder } from '~/models/IFolder';
import { getAllFolder, getCreateFolder } from '~/repositories/folder';
import { GetFolderResponse } from '~/types/Folder';
import useModal from './useModal';
import useFolderStore from '~/store/useFolderStore';

function UseFolder() {
    const { id } = useParams();
    const {
        isOpen: isOpenModalAddFolder,
        open: handleOpenModalAddFolder,
        close: handleCloseModalAddFolder,
    } = useModal();

    const setId = useFolderStore((state) => state.setId);

    const [allFolder, setAllFolder] = useState<IFolder[]>([]);

    const { data } = useQuery<GetFolderResponse>(
        'getStudent',
        async () => getAllFolder(Number(id)),
        {
            onSuccess(res: any) {
                setAllFolder(res.data);
                setId(Number(res?.data[0]?.id));
            },
            onError(err) {
                console.log(err);
            },
        },
    );
    // const { mutate: mutateGetFolder } = useMutation(
    //     'getAllFolder',
    //     ({ classId }: { classId: number }) => getAllFolder(classId),
    //     {
    //         onSuccess(data) {
    //             setAllFolder(data.data);
    //             console.log('data all ', data);
    //         },
    //         onError(err) {
    //             console.log(err);
    //         },
    //     },
    // );
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
        isOpenModalAddFolder,
        handleOpenModalAddFolder,
        handleCloseModalAddFolder,
        mutateCreateFolder,
        allFolder,
    };
}

export default UseFolder;
