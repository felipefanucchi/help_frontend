import { Role } from './roles';

export class User {
    name: string;
    email: string;
    password: string;
    document_number: string;
    birthdate: string;
    postal_code: string;
    address: string;
    neighborhood: string;
    city: string;
    state: string;
    token?: string;
    role: Role;

    constructor(protected user: User) {
        Object.assign(this, user);
    }
}