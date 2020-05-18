import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services';
import { User } from '../models/User';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let currentUser = this.authenticationService.currentUserValue;

        console.log(currentUser, 'canActivate currentuser');
 
        if (currentUser) return this.handleLoggedUser(route, currentUser);
        else return this.handleNOTLoggedUser(state);
    }

    private handleLoggedUser(route, currentUser: User): boolean {
        // check if the user has permission
        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            console.log(route.data.roles, ' Role Permissions');
            this.router.navigate(['/']);
            return false
        }

        return true;
    }

    private handleNOTLoggedUser(state: RouterStateSnapshot) {
        // Added this params, so after the login the user must get redirected to this url.
        this.router.navigate(['auth'], {
            queryParams: {
                returnUrl: state.url
            }
        });
        return false;
    }
}