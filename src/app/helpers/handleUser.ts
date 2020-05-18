import { Admin, Customer, Professional, Help } from '../models'

export class HandleUserType {
    constructor(private user: any) {}
    
    create() {
        if (!this.user && !this.user.role) return;
        
        switch(this.user.role) {
            case 'Admin':
                return new Admin(this.user);
            case 'Customer':
                return new Customer(this.user);
            case 'Professional':
                return new Professional(this.user);
            case 'Help':
                return new Help(this.user);
        }
    }
}