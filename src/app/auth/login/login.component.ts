import { Component } from '@angular/core';
import { NbLoginComponent, NbAuthService } from '@nebular/auth';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { NbToastrService } from '@nebular/theme';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {
	form: FormGroup;
	submitted: boolean;

  constructor(
    protected router: Router,
		private authenticationService: AuthenticationService,
		private formBuilder: FormBuilder,
		private toastrService: NbToastrService
  ) {
    super(null, null, null, null);
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe((user: User) => this.redirectUser(user));
		this.form = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email, Validators.pattern]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
  }

  handleSubmit(event) {
    event.preventDefault();
		const {email, password} = this.form.getRawValue();
		this.submitted = true;

    this.authenticationService.login(email, password)
      .subscribe(
        (user: User) => this.redirectUser(user),
        (err: HttpErrorResponse) => {
					if (err.error instanceof Error) {
						console.error('An error occurred:', err.error.message);
						this.showToast(err.error.message, 'top-right', 'danger');
					} else {
						console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
						this.showToast(err.error, 'top-right', 'danger');
					}
				}
      );
  }

  private redirectUser(user: User): void {
    // Based on role, you can choose where the user goes.
    console.log(user);
    this.router.navigate(['/dashboard']);
	}
	
	formNotFilled() {
		const emailControl = this.form.get('email');
		const passwordControl = this.form.get('password');
		return emailControl.invalid || passwordControl.invalid;
	}


	showToast(message, position, status) {
		const iconConfig = {
			icon: 'alert-circle-outline',
			pack: 'eva',
			position,
			status
		};
		
    this.toastrService.show(message, 'Erro', iconConfig);
  }
}