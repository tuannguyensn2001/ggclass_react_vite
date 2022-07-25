import { useCallback, useMemo, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import API from '~/network/API';
import { STATUS } from '~/enums/class';
import { toast } from 'react-toastify';
import useDebounceFunction from '~/hooks/useDebounceFunction';
import dayjs from 'dayjs';

export default function useManageMyClass() {
    const [listData, setListData] = useState();
    const originData = useRef();
    const { data } = useQuery(
        'classes',
        async () => {
            const response = await API.get('/v1/classes');
            return response.data;
        },
        {
            onSuccess(response) {
                setListData(response.data);
                originData.current = response.data;
            },
        },
    );

    const activeClass = useMemo(() => {
        if (!Boolean(listData) || !Array.isArray(listData)) return [];
        return listData.filter((item) => item?.statusClass === STATUS.ACTIVE);
    }, [listData]);

    const { mutate } = useMutation(
        'submit',
        async (classes) => {
            const response = await API.post('/v1/classes', classes);
            return response.data;
        },
        {
            async onSuccess(classes) {
                setListData((prev) => [classes.data, ...prev]);
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

    const handleSearch = useDebounceFunction(({ search, sort }) => {
        const origin = structuredClone(originData.current);
        if (!Array.isArray(origin)) return;

        const filter = origin?.filter((item) => item.name.toLowerCase().includes(search?.trim()?.toLowerCase()));

        if (sort === 'A-Z') {
            filter.sort((a, b) => a?.name?.localeCompare(b?.name));
        } else if (sort === 'Z-A') {
            filter.sort((a, b) => b?.name?.localeCompare(a?.name));
        } else if (sort === 'time_asc') {
            filter.sort((a, b) => dayjs(b.updatedAt).diff(dayjs(a.updatedAt)));
        } else if (sort === 'time_desc') {
            filter.sort((a, b) => dayjs(a?.updatedAt).diff(dayjs(b?.updatedAt)));
        }

        setListData(filter);
    }, 500);

    return {
        listData,
        setListData,
        activeClass,
        mutate,
        handleSearch,
    };
}
