import { User } from './User';
import { ProfessionalServices } from '../interfaces';

export class Professional extends User {
    register_code: string;
    latitude: string;
    longitude: string;
    cost: string;
    service: ProfessionalServices
}

