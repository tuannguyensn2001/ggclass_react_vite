import { toast } from 'react-toastify';

import API from '~/network/API';
import { useMutation, useQuery } from 'react-query';

export default function useManageJoinClasses() {
    const { mutate: mutateJoin } = useMutation(
        'joinClass',
        async (data) => {
            const res = await API.post('/v1/members', data);
            return res.data;
        },
        {
            onSuccess(data) {
                toast.success('Gửi yêu cầu tham gia lớp học thành công vui lòng chờ xét duyệt');
            },
            onError(err) {
                console.log(err);
                if (err.response.data.statusCode === 409) {
                    toast.error('Bạn đã gửi yêu câù vào lớp này rồi');
                } else if (err.response.data.statusCode === 404) {
                    toast.error('Lớp học không tồn tại');
                }
            },
        },
    );

    return {
        mutateJoin,
    };
}
