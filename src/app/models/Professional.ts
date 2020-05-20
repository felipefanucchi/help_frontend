import { User } from './User';
import { ProfessionalServices } from '../interfaces';

export class Professional extends User {
    name: string;
    password: string;
    document_number: string;
    birthdate: string;
    postal_code: string;
    address: string;
    neighborhood: string;
    city: string;
    state: string;
    register_code: string;
    latitude: string;
    longitude: string;
    cost: string;
    service: ProfessionalServices

    constructor(protected user: any) {
        super(user);
    }
}
