import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../services';
import { Observable, OperatorFunction, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	fordiddenStatuscode = [401, 403];

	constructor(
		private authenticationService: AuthenticationService,
		private router: Router
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(catchError(this.handleErrors));
	}

	private handleErrors(err: HttpErrorResponse): Observable<HttpEvent<any>> {
		// check if the route is forbidden
		if (this.fordiddenStatuscode.indexOf(err.status) !== -1) {
			this.authenticationService.logout();
			this.router.navigateByUrl('/auth', {
				skipLocationChange: true
			})
		}

		const error = err.error.message || err.statusText;

		return throwError(error);
	}
}