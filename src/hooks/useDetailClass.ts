import { IClass } from '~/models/IClass';
import { useQuery } from 'react-query';
import { getDetailClass } from '~/repositories/class';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function useDetailClass(classId: number): IClass | undefined {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data } = useQuery(['class-detail', classId], async () => getDetailClass(Number(id)), {
        onSuccess(response) {
            console.log(response);
        },
        onError() {
            navigate('/class');
        },
    });

    useEffect(() => {
        // if (!Number(classId)) navigate('/class');
    }, [classId]);

    return data;
}
