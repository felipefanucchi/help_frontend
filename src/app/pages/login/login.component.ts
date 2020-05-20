import { Component } from '@angular/core';
import { NbLoginComponent, NbAuthService } from '@nebular/auth';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {
  form: FormGroup;

  constructor(
    protected router: Router,
    private authenticationService: AuthenticationService
  ) {
    super(null, null, null, null);
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe((user: User) => this.redirectUser(user));

    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {email, password} = this.form.getRawValue();
    console.log(email, password);
    this.authenticationService.login(email, password)
      .subscribe(
        (user: User) => this.redirectUser(user),
        err => console.log(err)
      );
  }

  private redirectUser(user: User): void {
    // Based on role, you can choose where the user goes.
    console.log(user);
    this.router.navigate(['/pages']);
  }
}