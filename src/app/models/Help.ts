import { User } from './User';

export class Help extends User {
    constructor(protected user: any) {
        super(user);
    }
}