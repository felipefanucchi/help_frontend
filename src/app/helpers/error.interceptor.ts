import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../services';
import { Observable, OperatorFunction, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	fordiddenStatuscode = [401, 403];
	generalErrorStatuscode = [404, 500];

	constructor(
		private authenticationService: AuthenticationService,
		private router: Router,
		private toastrService: NbToastrService,
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((err: HttpErrorResponse) => {
			if (this.generalErrorStatuscode.indexOf(err.status) !== -1) {
				this.showErrorToastr(err.message, 'danger');
			}
			
			// check if the route is forbidden
			if (this.fordiddenStatuscode.indexOf(err.status) !== -1) {
				this.authenticationService.logout();
				this.router.navigateByUrl('/auth', {
					skipLocationChange: true
				})
			}
	
			const error = err.message || err.statusText;
	
			return throwError(error);
		})
	) };

	private showErrorToastr(message, status) {
		const iconConfig = {
			postition: 'top-right',
			status: status
		};
		
		this.toastrService.show(message, 'Erro', iconConfig);
	}
}