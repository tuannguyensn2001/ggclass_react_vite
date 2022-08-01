import { IClass } from '~/models/IClass';
import { useQuery } from 'react-query';
import { getDetailClass } from '~/repositories/class';
import { useMemo } from 'react';

export default function useDetailClass(classId: number): IClass | undefined {
    const { data } = useQuery(['class-detail', classId], async () => getDetailClass(classId), {
        onSuccess(response) {
            console.log(response);
        },
    });

    return data;
}
