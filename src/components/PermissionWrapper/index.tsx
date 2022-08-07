import useRoleInClass from '~/hooks/useRoleInClass';
import { Role } from '~/enums/role';

function PermissionWrapper({ children, role }: { children: JSX.Element | JSX.Element[]; role: Role }) {
    const currentRole = useRoleInClass();

    return <>{currentRole === role && children}</>;
}

export default PermissionWrapper;
