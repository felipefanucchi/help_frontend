import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const currentUser = this.authenticationService.currentUserValue;

        if (currentUser) return this.handleLoggedUser(route, currentUser);
        else return this.handleNOTLoggedUser();
    }

    private handleLoggedUser(route, currentUser): boolean {
        // check if the user has permission
        if (route.data.roles && route.data.roles.indexOf(currentUser) === -1) {
            this.router.navigate(['/']);
            return false
        }

        return true;
    }

    private handleNOTLoggedUser() {
        this.router.navigate(['login']);
        return false;
    }
}