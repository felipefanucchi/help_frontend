import { Role } from './roles';

export class User {
	email: string;
	token?: string;
	id?: number;
	role: Role;

	constructor(protected user: User) {
		Object.assign(this, user);
	}
}