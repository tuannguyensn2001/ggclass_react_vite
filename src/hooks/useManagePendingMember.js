import { useCallback, useMemo, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import API from '~/network/API';
import { STATUS } from '~/enums/class';
import { toast } from 'react-toastify';
import useDebounceFunction from '~/hooks/useDebounceFunction';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

export default function useManagePendingMember() {
    const [listPendingMember, setListPendingMember] = useState();
    const originData = useRef();
    const { id } = useParams();
    const classId = useMemo(() => {
        return Number(id);
    }, [id]);
    const { data } = useQuery(
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
    const { mutate: mutateA } = useMutation(
        'acceptPending',
        async (classes) => {
            const response = await API.put('/v1/members', classes);
            return response.data;
        },
        {
            async onSuccess(classes) {
                setListPendingMember((prev) => [classes.data, ...prev]);
                toast.success('Thêm lớp học thành công');
            },
            onError(err) {
                console.log(err);
                if (err.response.data.statusCode === 409) {
                    toast.error('Lớp học đã tồn tại');
                } else {
                    toast.error('Thêm lớp học thất bại');
                }
            },
        },
    );
    return {
        listPendingMember,
        mutateA,
    };
}
