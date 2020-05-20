import { Role } from './roles';

export class User {
    email: string;
    token?: string;
    role: Role;

    constructor(protected user: User) {
        Object.assign(this, user);
    }
}