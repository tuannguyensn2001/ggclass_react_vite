import { Role } from '~/enums/role';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getRole } from '~/repositories/class';

export default function useRoleInClass(): Role | undefined {
    const { id } = useParams();

    const { data } = useQuery<Role>(['role', id], () => getRole(Number(id)));

    return data;
}
