import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import API from '~/network/API';
import { useMutation, useQuery } from 'react-query';
import { getSocket } from '~/packages/socket';
import pusher from '~/packages/pusher';

export default function useManageMyNewFeeds(userIdDelete) {
    const [listStudent, setListStudent] = useState([]);
    const { id } = useParams();
    const classId = useMemo(() => {
        return Number(id);
    }, [id]);

    const { data } = useQuery(
        'getStudent',
        async () => {
            const res = await API.get(`/v1/classes/members/${classId}`);
            return res.data.data;
        },
        {
            onSuccess(data) {
                setListStudent(data);
            },
        },
    );

    const { mutate: mutateS } = useMutation(
        'addStudent',
        async (data) => {
            console.log(data);

            const response = await API.post('/v1/classes/members', data);
            return response.data;
        },
        {
            async onSuccess(data) {
                toast.success('Mời học sinh thành công');
            },
            onError(err) {
                console.log(err);
                toast.error('Mời học học sinh thất bại vui lòng thử lại');
            },
        },
    );
    const { mutate: mutateD } = useMutation(
        'deleteStudent',
        async (data) => {
            console.log(data);
            const response = await API.delete('/v1/classes/members', data);
            return response.data;
        },
        {
            async onSuccess(data) {
                const clone = structuredClone(listStudent);
                const index = listStudent.forEach((item, index) => {
                    if (item.id === userIdDelete) return index;
                });
                const clone2 = clone.splice(index, 1);
                setListStudent(clone2);
                toast.success('Xóa học sinh thành công');
            },
            onError(err) {
                console.log(err);
                toast.error('Xóa học học sinh thất bại vui lòng thử lại');
            },
        },
    );

    return {
        listStudent,
        mutateS,
        mutateD,
        classId,
    };
}
