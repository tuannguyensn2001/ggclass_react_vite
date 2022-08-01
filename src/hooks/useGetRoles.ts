import { Role } from '~/enums/role';
import { useQuery } from 'react-query';
import { getRoles } from '~/repositories/class';
import { GetRoleResponse } from '~/types/class';
import { useMemo } from 'react';

export default function useGetRoles(classId: number): Role | undefined {
    const { data } = useQuery<GetRoleResponse>('roles', getRoles);

    const result = useMemo(() => {
        if (!Boolean(data)) return undefined;
        const admin = data?.admin || [];
        const student = data?.student || [];

        if (admin.includes(classId)) return Role.ADMIN;
        if (student.includes(classId)) return Role.STUDENT;
    }, [classId, data]);

    return result;
}
