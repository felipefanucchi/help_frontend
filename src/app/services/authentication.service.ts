import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { HandleUserType } from '../helpers';
// @ts-ignore: Unreachable code error
import * as FakeUser from '../fakeuser.json';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(
            JSON.parse(localStorage.getItem('currentUser'))
        );

        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string): Observable<any> {
        // const HandleUser = new HandleUserType(FakeUser.default.user);
        // const currentUser = HandleUser.create();
        return this.http.post(`${environment.api}/accounts/login/`, {
            email,
            password
        }).pipe(map(this.handleLogin.bind(this)));
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    private handleLogin(user: User): User {
        if (user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
        }

        return user;
    }

    // Must implement the recover and register method.
}