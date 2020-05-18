import { User } from './User';

export class Admin extends User {
    constructor(protected user: any) {
        super(user);
    }
}