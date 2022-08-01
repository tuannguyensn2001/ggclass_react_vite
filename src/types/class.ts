export interface CreateClassForm {
    name: string;
    description: string;
}

export interface SearchClassForm {
    search: string;
    sort: string;
}

export interface GetRoleResponse {
    admin: number[];
    student: number[];
}
