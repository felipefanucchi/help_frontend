import { User } from './User';

export class Admin extends User {
    name: string;
    password: string;
    document_number: string;
    birthdate: string;
    postal_code: string;
    address: string;
    neighborhood: string;
    city: string;
    state: string;
    
    constructor(protected user: any) {
        super(user);
    }
}