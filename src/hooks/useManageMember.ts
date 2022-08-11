import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import API from '~/network/API';
import { useMutation, useQuery } from 'react-query';
import { IUser } from '~/models/IUser';

export default function useManageMyNewFeeds() {
    const [listStudent, setListStudent] = useState<IUser[]>([]);
    const [listPendingMember, setListPendingMember] = useState();

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

    const { mutate: mutateAcceptPendingddStudent } = useMutation(
        'addStudent',
        async (data) => {
            const response = await API.post('/v1/classes/members', data);
            return response.data.data;
        },
        {
            async onSuccess(data) {
                setListStudent((prev) => [data, ...prev]);
                toast.success('Thêm học sinh thành công');
            },
            onError(err) {
                console.log(err);
                if (err.response.data.statusCode === 404) {
                    toast.error('Không tồn tại học sinh này');
                } else if (err.response.data.statusCode === 409) {
                    toast.error('Đã tồn tại học sinh này trong lớp học');
                }
            },
        },
    );
    const { mutate: mutateDeleteStudent } = useMutation(
        'deleteStudent',
        async (data) => {
            const response = await API.delete('/v1/classes/members', { data });
            return data.userId;
        },
        {
            async onSuccess(userIdDelete) {
                const clone = structuredClone(listStudent);
                const indexOfObject = clone.findIndex((object) => {
                    return object.id === userIdDelete;
                });
                clone.splice(indexOfObject, 1);
                setListStudent(clone);
                toast.success('Xóa học sinh thành công');
            },
            onError(err) {
                console.log(err);
                toast.error('Xóa học học sinh thất bại vui lòng thử lại');
            },
        },
    );

    const { data: dataPending } = useQuery(
        'pendingMember',
        async () => {
            const response = await API.get(`/v1/members/class/${classId}/pending`);
            return response.data.data;
        },
        {
            onSuccess(data) {
                setListPendingMember(data);
            },
        },
    );
    const { mutate: mutateAcceptPending } = useMutation(
        'acceptPending',
        async (user) => {
            const response = await API.put('/v1/members', user);
            return user.userId;
        },
        {
            async onSuccess(idPending) {
                const clonePending = structuredClone(listPendingMember);
                const newUser = clonePending.find((item) => item.id === idPending);
                setListStudent((prev) => [newUser, ...prev]);
                const indexOfObject = clonePending.findIndex((item) => {
                    return item.id === idPending;
                });
                clonePending.splice(indexOfObject, 1);
                setListPendingMember(clonePending);

                toast.success('Chấp thuận thành công');
            },
            onError(err) {
                console.log(err);
                toast.error('Có lỗi');
            },
        },
    );
    const { mutate: mutateAcceptPendingAll } = useMutation(
        'acceptPending',
        async (data) => {
            const response = await API.post(`/v1/members/class/${classId}/accept`);
            return response.data;
        },
        {
            async onSuccess(data) {
                setListStudent((prev) => [...listPendingMember, ...prev]);
                setListPendingMember([]);

                toast.success('Chấp thuận tất cả thành công');
            },
            onError(err) {
                console.log(err);
                toast.error('Có lỗi');
            },
        },
    );

    return {
        listStudent,
        mutateAcceptPendingddStudent,
        mutateDeleteStudent,
        classId,
        listPendingMember,
        mutateAcceptPending,
        mutateAcceptPendingAll,
    };
}
