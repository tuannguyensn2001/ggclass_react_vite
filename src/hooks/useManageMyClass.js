import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import API from '~/network/API';
import { STATUS } from '~/enums/class';
import { toast } from 'react-toastify';

export default function useManageMyClass() {
    const [listData, setListData] = useState();
    const { data } = useQuery('classes', async () => {
        const response = await API.get('/v1/classes');
        setListData(response.data.data);
        return response.data;
    });

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
                setListData((prev) => [...prev, classes.data]);
                toast.success('Thêm lớp học thành công');
            },
        }
    );

    return {
        listData,
        setListData,
        activeClass,
        mutate,
    };
}
