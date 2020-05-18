import { Component } from '@angular/core';
import { NbLoginComponent, NbAuthService } from '@nebular/auth';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services';
import { Router } from '@angular/router';

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
    this.authenticationService.currentUser.subscribe(user => {
      console.log(user);
      this.router.navigate(['/pages']);
    });

    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {username, password} = this.form.getRawValue();
    this.authenticationService.login(username, password);
  }
}