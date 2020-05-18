import { User } from './User';

export class Customer extends User {
    value: string;
    
    constructor(protected user: any) {
        super(user);
    }
}