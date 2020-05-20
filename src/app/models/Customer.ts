import { User } from './User';

export class Customer extends User {
    name: string;
    password: string;
    document_number: string;
    birthdate: string;
    postal_code: string;
    address: string;
    neighborhood: string;
    city: string;
    state: string;
    value: string;
    
    constructor(protected user: any) {
        super(user);
    }
}