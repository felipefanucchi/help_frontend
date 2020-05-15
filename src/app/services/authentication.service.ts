import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../@core/data/users';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService<T> {
    private currentUserSubject: BehaviorSubject<T>;
    public currentUser: Observable<T>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<T>(
            JSON.parse(localStorage.getItem('currentUser'))
        );

        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.api}`, {
            username,
            password
        }).pipe(map(this.handleLogin))
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    private handleLogin<T>(user): T {
        if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
        }

        return user;
    }

    // Must implement the recover and register method.
}