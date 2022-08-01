import { Role } from '~/enums/role';

interface Prop {
    roles: Role | Role[];
    children: JSX.Element | JSX.Element[];
}

function Permission({ roles, children }: Prop) {
    return <div></div>;
}

export default Permission;
