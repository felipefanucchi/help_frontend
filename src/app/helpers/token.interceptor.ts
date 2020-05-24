import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services';
import { environment } from '../../environments/environment';
import { Professional, Admin, Customer } from '../models';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(private authencationService: AuthenticationService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const currentUser = this.authencationService.currentUserValue;
		const isLoggedIn = currentUser && currentUser.token;
		const isApiUrl = request.url.startsWith(environment.api);

		if (isApiUrl && isLoggedIn) {
			request = request.clone({
				setHeaders: {
					Authorization: `Token ${currentUser.token}`
				}
			})
		}

		return next.handle(request);
	}
}